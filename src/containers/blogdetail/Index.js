import React, { useEffect, Fragment } from 'react';
import {connect} from 'react-redux';

import Post from '../../components/post/Index';
import './Index.css';

import {fetchRelatedPost, ratePost, fetchPostDetail, resetPostDetail} from '../../actions/PostDetail.Actions'

import './Index.css';
import Footer from '../../components/footer/Index';
import BackToTop from '../../components/backtotop/Index';
import Nav from '../../components/nav/Index';


const BlogDetail = (props) => {



    useEffect(() => {
        window.scroll(0, 100);
        const postID = props.match.params.id;
        props.fetchPostDetail(postID);
        props.fetchRelatedPost(postID);
    }, [])


    // const addRate = () => {
    //     const {id} = props.match.params;
    //     const vote = localStorage.getItem(`vote-${id}`);
    //     if (vote) {
    //         let level = document.getElementById('level1');
    //         if (!level)
    //             return;
    //         while (level.id !== `level${vote}`) {
    //             //if (level)
    //             level.classList.add('rated');
    //             level = level.nextElementSibling;
    //         } 
    //         level.classList.add('rated');
    //         if (level.id === 'level5')
    //              return;

    //         level = level.nextElementSibling;
    //         while (level.id !== 'level5') {
    //             level.classList.remove('rared');
    //             level = level.nextElementSibling;
    //         }
    //         level.classList.remove('rated');
    //     }
    // }

    // const removeRate = () => {
    //     let level = document.getElementById('level1');
    //     while (level.id !== 'level5') {
    //         level.classList.remove('rated');
    //         level = level.nextElementSibling;
    //     }
    //     level.classList.remove('rated');
    // }

    const clickToRate = (num) => {
        const postID = props.match.params.id;
        //alert(postID);
        //set LocalStorage
        localStorage.setItem(`vote-${postID}`, num);
        //send Rate
        
        props.ratePost(postID, num);
    }

 
    
    return (
        <Fragment>
            <Nav color={'fc-white'}/>
            {/* <Messenger /> */}
            <section className="container-blog-detail-content p-tb-100">
                <div className="blog-detail-content-wrapper container">
                    <div className="row">
                        <Post
                            isFetching={props.isPostDetailFetching}
                            postDetail={props.postDetail}
                            relatedPosts={props.relatedPosts}
                            clickToRate={(num) => clickToRate(num)}
                            id={props.match.params.id} />
                    </div>
                </div>
            </section>
            <Footer />
            <BackToTop />
        </Fragment>
    );
    

}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostDetail: (postID) => {
            dispatch(fetchPostDetail(postID))
        },
        fetchRelatedPost: (postID) => dispatch( fetchRelatedPost(postID)),
        ratePost: (postID, rate) => dispatch(ratePost(postID, rate)),
        resetPostDetail: () => dispatch(resetPostDetail())
    }
}

const mapStateToProps = (state) => {
    const postDetailReducer = state.postDetailReducer;
    
    return {
        postDetail:     postDetailReducer.postDetail,
        isPostDetailFetching: postDetailReducer.isPostDetailFetching,
        relatedPosts:   postDetailReducer.relatedPosts
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail)