import React, { Component } from 'react';
import {connect} from 'react-redux';

import LeftSlideBar from '../components/blog/LeftSlideBar';
import RightSlideBar from '../components/blog/RightSlideBar';
import SearchResult from '../components/blog/SearchResult';


import {searchPost, fetchPost, fetchTopPost, fetchRecentPost, resetResult} from '../actions/Post.Actions';


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

    search = (event, keyword) => {
        event.preventDefault();
        if (keyword === this.props.keyword)
            return;
        const nextPage = this.props.page + 1;
        //reset posts array
        this.props.resetResult();

        if (keyword === '')
            this.props.fetchPost(0);
        else
            this.props.search(keyword, 0);
    }
    
    
    render() {
        
            return (
                <section className="container-blog-content p-t-100">
                    <div className="blog-content-wrapper container">
                        <div className="row">
                            {this.showSearchResult()}
                        </div>
                        <div className="row">
                        <LeftSlideBar isPostFetching={this.props.isPostFetching} page={this.props.page} posts={this.props.posts} isSearch={this.props.isSearch} 
                        keyword={this.props.keyword} hasMore={this.props.hasMore} topic={this.getTopic()} fetchPost={(nextPage) => this.props.fetchPost(nextPage)}
                        searchPost={(keyword, nextPage) => this.props.search(keyword, nextPage)} />
                        
                        <RightSlideBar isTopPostFetching={this.props.isTopPostFetching} isRecentPostFetching={this.props.isRecentPostFetching} 
                        isSearch={this.props.isSearch} posts={this.props.posts} recentPosts={this.props.recentPosts} 
                        topPosts={this.props.topPosts} keyword={(event, keyword) => this.search(event, keyword)}/>

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
        search: (keyword, page) => {
            dispatch(searchPost(keyword, page));
        },
        fetchPost: (nextPage) => {
            dispatch(fetchPost(nextPage));
        },
        fetchRecentPost: () => dispatch(
            fetchRecentPost()
        ),
        fetchTopPost: () => dispatch(
            fetchTopPost()
        ),
        resetResult: () => dispatch(
            resetResult()
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const reducer = state.postReducer;
    
    return {
        posts:          reducer.posts,
        hasMore:        reducer.hasMore,
        page:           reducer.page,
        keyword:        reducer.keyword,
        isSearch:       reducer.isSearch,
        topPosts:       reducer.topPosts,
        recentPosts:    reducer.recentPosts,
        isPostFetching: reducer.isPostFetching,
        isTopPostFetching: reducer.isTopPostFetching,
        isRecentPostFetching: reducer.isRecentPostFetching
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Blog);