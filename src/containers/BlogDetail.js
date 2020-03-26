import React, { Component } from 'react';
import {connect} from 'react-redux';

import LeftSlideBarBD from '../components/blog-detail/LeftSlideBarBD';
import RightSlideBar from '../components/blog/RightSlideBar';

import {searchPost, fetchTopRate, fetchRecentPost, fetchTopView, fetchCategories} from '../actions/Post.Actions';
import {fetchRelatedPost, ratePost, fetchPostDetail} from '../actions/PostDetail.Actions'

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

    addRate = () => {
        const {id} = this.props.match.params;
        const vote = localStorage.getItem(`vote-${id}`);
        if (vote) {
            let level = document.getElementById('level1');
            if (!level)
                return;
            while (level.id !== `level${vote}`) {
                //if (level)
                level.classList.add('rated');
                level = level.nextElementSibling;
            } 
            level.classList.add('rated');
            if (level.id === 'level5')
                 return;

            level = level.nextElementSibling;
            while (level.id !== 'level5') {
                level.classList.remove('rared');
                level = level.nextElementSibling;
            }
            level.classList.remove('rated');
        }
    }

    removeRate = () => {
        let level = document.getElementById('level1');
        while (level.id !== 'level5') {
            level.classList.remove('rated');
            level = level.nextElementSibling;
        }
        level.classList.remove('rated');
    }

    clickToRate = (num) => {
        const postID = this.props.match.params.id;
        //alert(postID);
        //set LocalStorage
        localStorage.setItem(`vote-${postID}`, num);
        //send Rate
        
        this.props.ratePost(postID, num);
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
                        <LeftSlideBarBD isFetching={this.props.isPostDetailFetching} postDetail={this.props.postDetail} 
                        relatedPosts={this.props.relatedPosts} clickToRate={(num) => this.clickToRate(num)}
                        id={this.props.match.params.id}/>

                        <RightSlideBar isSearch={this.state.isSearch} posts={this.props.posts} recentPosts={this.props.recentPosts} 
                        topRates={this.props.topRates} keyword={(event, keyword) => this.props.search(event, keyword)}
                        categories={this.props.categories}/>
                    </div>
                </div>
            </section>
            
            
        );
    }

    componentDidMount() {
        const postID = this.props.match.params.id;
        //console.log('did mount id la: ' + postID);
        this.props.fetchPost(postID);

        //haven't fetch right bar item
        if (this.props.topRates.length === 0){
            this.props.fetchRecentPost();
            this.props.fetchTopPost();
        }
        if (!this.props.categories.length)
            this.props.fetchCategories();
        
        this.props.fetchRelatedPost(postID);
    }
    componentDidUpdate() {
        //get vote from local storage
        //this.removeRate();
        //this.addRate();
    }
    
    
    shouldComponentUpdate(nextPops, nextState){
        //window.scrollTo(0, 500);
        const nextPostID = nextPops.match.params.id,
              currentPostID = this.props.match.params.id;
        if (nextPostID !== currentPostID){
            this.props.fetchPost(nextPostID);
            this.props.fetchRelatedPost(nextPostID);
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
        fetchTopRate: () => dispatch(
            fetchTopRate()
        ),
        fetchTopView: () => dispatch( fetchTopView()),
        fetchCategories: () => dispatch(fetchCategories()),
        fetchRelatedPost: (postID) => dispatch( fetchRelatedPost(postID)),
        ratePost: (postID, rate) => dispatch(ratePost(postID, rate))
    }
}

const mapStateToProps = (state, ownProps) => {
    const reducer = state.postReducer;
    
    return {
        postDetail:     state.postDetailReducer.postDetail,
        categories:     reducer.categories,
        topRates:       reducer.topRates,
        recentPosts:    reducer.recentPosts,
        topViews:       reducer.topViews,
        pageNumber:     reducer.page,
        isPostDetailFetching: reducer.isPostDetailFetching,
        isUpdate:       reducer.isUpdate,
        relatedPosts:   state.postDetailReducer.relatedPosts
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail)