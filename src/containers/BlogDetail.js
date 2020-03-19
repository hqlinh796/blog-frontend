import React, { Component } from 'react';
import {connect} from 'react-redux';

import LeftSlideBarBD from '../components/blog-detail/LeftSlideBarBD';
import RightSlideBar from '../components/blog/RightSlideBar';

import {searchPost, fetchPostDetail, fetchTopPost, fetchRecentPost} from '../actions/Post.Actions';

const queryString = require('query-string');

class BlogDetail extends Component {
    
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
    render() {
        return (  
            <section className="container-blog-detail-content p-tb-100">
                <div className="blog-detail-content-wrapper container">
                    <div className="row">
                        <LeftSlideBarBD isFetching={this.props.isPostDetailFetching} postDetail={this.props.postDetail} />
                        <RightSlideBar isSearch={this.state.isSearch} posts={this.props.posts} recentPosts={this.props.recentPosts} topPosts={this.props.topPosts} keyword={(event, keyword) => this.props.search(event, keyword)}/>
                    </div>
                </div>
            </section>
            
            
        );
    }

    componentWillMount() {
        const postID = this.props.match.params.id;
        console.log('did mount id la: ' + postID);
        this.props.fetchPost(postID);

        //haven't fetch right bar item
        if (this.props.topPosts.length === 0){
            this.props.fetchRecentPost();
            this.props.fetchTopPost();
        }
    }
    componentWillReceiveProps(){
        const postID = this.props.match.params.id;
        //console.log("WILL RECEIVE PROPS " + nextPops.postDetail.title);
        //this.props.fetchPost(postID);    
    }
    shouldComponentUpdate(nextPops, nextState){
        window.scrollTo(0, 500);
        const nextPostID = nextPops.match.params.id,
              currentPostID = this.props.match.params.id;
        if (nextPostID !== currentPostID){
            this.props.fetchPost(nextPostID);
            return false;
        }   
        return true;
    }

    
    

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        search: (event, keyword) => {
            event.preventDefault();
            dispatch(searchPost(keyword, ownProps.pageNumber));
        },
        fetchPost: (postID) => {
            dispatch(fetchPostDetail(postID))
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
        postDetail:     reducer.postDetail,
        topPosts:       reducer.topPosts,
        recentPosts:    reducer.recentPosts,
        pageNumber:     reducer.page,
        isPostDetailFetching: reducer.isPostDetailFetching,
        isUpdate:       reducer.isUpdate
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail)