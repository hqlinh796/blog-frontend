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
        if (this.props.posts.length > 0){
            console.log("trong return: " + this.props.posts);
            return (
                <section className="container-blog-content p-t-100">
                    <div className="blog-content-wrapper container">
                        <div className="row">
                            {this.showSearchResult()}
                        </div>
                        <div className="row">
                        <LeftSlideBar page={0} posts={this.props.posts} topic={this.getTopic()} keyword={this.state.keyword}/>
                        <RightSlideBar isSearch={this.state.isSearch} posts={this.props.posts} recentPosts={this.props.recentPosts} topPosts={this.props.topPosts} keyword={(event, keyword) => this.props.search(event, keyword)}/>
                            
                        </div>
                    </div>
                </section>
            );
        }
        
        else{
            return (
                <div className="blog-content-wrapper container">
                    Het
                </div>
            );
        }
           
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
    componentDidUpdate(){
        console.log("blog dip update");
    }
    componentDidMount() {
        this.props.fetchPost();
        //haven't fetch right bar item
        if (this.props.topPosts.length === 0){
            this.props.fetchRecentPost();
            this.props.fetchTopPost();
        }
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        search: (event, keyword) => {
            event.preventDefault();
            if (keyword === '')
                dispatch(fetchPost(ownProps.pageNumber));
            else
                dispatch(searchPost(keyword, ownProps.pageNumber));
        },
        fetchPost: () => {
            dispatch(fetchPost(ownProps.pageNumber));
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
        topPosts:       reducer.topPosts,
        recentPosts:    reducer.recentPosts,
        pageNumber:     reducer.page
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Blog);