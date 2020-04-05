import React, { Component } from 'react';
import {connect} from 'react-redux';

import Post from '../../components/post/Index';
import RightBar from '../../components/rightbar/Index';
import './Index.css';

import {searchPost} from '../../actions/Post.Actions';
import {fetchRelatedPost, ratePost, fetchPostDetail} from '../../actions/PostDetail.Actions'

import './Index.css';

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

 
    render() {
        return (  
            <section className="container-blog-detail-content p-tb-100">
                <div className="blog-detail-content-wrapper container">
                    <div className="row">
                        <Post isFetching={this.props.isPostDetailFetching} postDetail={this.props.postDetail} 
                        relatedPosts={this.props.relatedPosts} clickToRate={(num) => this.clickToRate(num)}
                        id={this.props.match.params.id}/>

                        <RightBar 
                        isSearch={this.state.isSearch} 
                        posts={this.props.posts} 
                        keyword={(event, keyword) => this.props.search(event, keyword)}
                        />
                    </div>
                </div>
            </section>
            
            
        );
    }

    componentDidMount() {
        const postID = this.props.match.params.id;
        //console.log('did mount id la: ' + postID);
        this.props.fetchPost(postID);

        
        this.props.fetchRelatedPost(postID);
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
        
        fetchRelatedPost: (postID) => dispatch( fetchRelatedPost(postID)),
        ratePost: (postID, rate) => dispatch(ratePost(postID, rate))
    }
}

const mapStateToProps = (state, ownProps) => {
    const reducer = state.postReducer;
    
    return {
        postDetail:     state.postDetailReducer.postDetail,
        isPostDetailFetching: state.postDetailReducer.isPostDetailFetching,
        relatedPosts:   state.postDetailReducer.relatedPosts,

        pageNumber:     reducer.page,
        isUpdate:       reducer.isUpdate
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail)