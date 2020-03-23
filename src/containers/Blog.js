import React, { Component } from 'react';
import {connect} from 'react-redux';

import LeftSlideBar from '../components/blog/LeftSlideBar';
import RightSlideBar from '../components/blog/RightSlideBar';
import SearchResult from '../components/blog/SearchResult';


import {searchPost, fetchPost, fetchTopPost, fetchRecentPost} from '../actions/Post.Actions';


const queryString = require('query-string');



class Blog extends Component {
    constructor(props) {
        //console.log(props.match.params);
        console.log("blog constructor");
        super(props);
        this.state = ({
            isSearch: false,
            keyword: ""
        })
    }
    

    getPage = () => {
        const queryStringObject = queryString.parse(this.props.location.search);
        const pageTemp = queryStringObject.page || 0;
        return pageTemp;
    }
    search = (event, keyword) => {
        event.preventDefault();
        if (keyword !== ""){
            this.setState({
                keyword: keyword,
                isSearch: true
            })
            return;
        }
        this.setState({
            keyword: keyword,
            isSearch: false
        })

    }
    showSearchResult = () => {
        if (this.state.isSearch) 
            return <SearchResult keyword={this.state.keyword}/>;
    }
    getTopic = () => {
        let result = this.props.match.params.topic;
        if (result === "tat-ca")
            result = "";
        return result;
    }
    
    
    render() {
        
            return (
                <section className="container-blog-content p-t-100">
                    <div className="blog-content-wrapper container">
                        <div className="row">
                            {this.showSearchResult()}
                        </div>
                        <div className="row">
                        <LeftSlideBar isPostFetching={this.props.isPostFetching} page={this.props.page} posts={this.props.posts} 
                        hasMore={this.props.hasMore} topic={this.getTopic()} keyword={this.state.keyword} fetchPost={(nextPage) => this.props.fetchPost(nextPage)}/>
                        
                        <RightSlideBar isTopPostFetching={this.props.isTopPostFetching} isRecentPostFetching={this.props.isRecentPostFetching} 
                        isSearch={this.state.isSearch} posts={this.props.posts} recentPosts={this.props.recentPosts} 
                        topPosts={this.props.topPosts} keyword={(event, keyword) => this.props.search(event, keyword)}/>

                        </div>
                    </div>
                </section>
            );
           
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.keyword === nextState.keyword && nextState.keyword !== ""){
            this.setState({
                keyword: "",
                isSearch: false
            })
            return false;
        }
        return true;
    }
   
    componentDidMount() {
        const nextPage = this.props.page + 1;
        this.props.fetchPost(nextPage);
        //haven't fetch right bar item
        if (this.props.topPosts.length === 0){
            this.props.fetchRecentPost();
            this.props.fetchTopPost();
        }
        window.scrollTo(0, 0);
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        search: (event, keyword) => {
            event.preventDefault();
            if (keyword === '')
                dispatch(fetchPost(ownProps.page));
            else
                dispatch(searchPost(keyword, ownProps.pageNumber));
        },
        fetchPost: (nextPage) => {
            dispatch(fetchPost(nextPage));
        },
        fetchRecentPost: () => dispatch(
            fetchRecentPost()
        ),
        fetchTopPost: () => dispatch(
            fetchTopPost()
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const reducer = state.postReducer;
    
    return {
        posts:          reducer.posts,
        hasMore:        reducer.hasMore,
        page:           reducer.page,
        topPosts:       reducer.topPosts,
        recentPosts:    reducer.recentPosts,
        isPostFetching: reducer.isPostFetching,
        isTopPostFetching: reducer.isTopPostFetching,
        isRecentPostFetching: reducer.isRecentPostFetching
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Blog);