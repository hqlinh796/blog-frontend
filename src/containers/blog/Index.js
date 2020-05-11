import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { Fragment } from 'react';

import Messenger from '../../components/messenger/Index';
import Footer from '../../components/footer/Index';
import BackToTop from '../../components/backtotop/Index';
import Page from '../../components/page/Index';
import RightBar from '../../components/rightbar/Index';
import Nav from '../../components/nav/Index';

import './Index.css';

import {fetchPost, resetResult} from '../../actions/Post.Actions';
import {fetchRecentPosts, fetchCategories, fetchTopRatings, fetchTopViews} from '../../actions/RightBar.Actions';






const Blog = (props) => {
    const {
        posts,
        hasMore,
        page,
        isPostFetching,
        topViews,
        topRatings,
        categories,
        recentPosts
    } = props;
    const {
        search,
        fetchPost,
        resetResult
    } = props;

    const [category, setCategory] = useState(() => {
        const {topic} = props.match.params;
        const category = topic === 'tat-ca' ? '' : topic;
        return category;
    });
    
    useEffect(() => {
        const {topic} = props.match.params;
        if (topic === category)
            return;
        const categoryTemp = topic === 'tat-ca' ? '' : topic;
        setCategory(categoryTemp);
    })

    useEffect(() => {
        resetResult();
        fetchPost(0, 'date', category);
    }, [category])

    useEffect(() => {
        document.title = 'Blog - Linhtinh';
        
        if (!props.recentPosts.length) {
            props.fetchRecentPosts();
            props.fetchTopRatings();
            props.fetchTopViews();
            props.fetchCategories();
        }
    }, [])
    

    const fetchMorePost = () => {
        if (hasMore && !isPostFetching)
            fetchPost(page + 1, 'date', category);
    }


    return (
        <Fragment>
            <Nav />
            <Messenger />
            <section className="container-blog-content p-t-100">
                <div className="blog-content-wrapper container">
                    <div className="row">
                        <Page
                            isPostFetching={isPostFetching}
                            page={page}
                            posts={posts}
                            fetchMorePost={fetchMorePost}
                            searchPost={(keyword, nextPage, sortBy) => search(keyword, nextPage, sortBy)}
                        />
                        <RightBar
                            recentPosts = {recentPosts}
                            topRatings = {topRatings}
                            topViews = {topViews}
                            categories = {categories}
                        />
                    </div>
                </div>
            </section>
            <Footer />
            <BackToTop />
        </Fragment>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchPost: (nextPage, sortBy, category) => {
            dispatch(fetchPost(nextPage, sortBy, category));
        },
        resetResult: () => dispatch(
            resetResult()
        ),
        fetchRecentPosts: () => {
            dispatch(fetchRecentPosts());
        },
        fetchTopRatings: () => {
            dispatch(fetchTopRatings());
        },
        fetchTopViews: () => {
            dispatch(fetchTopViews());
        },
        fetchCategories: () => {
            dispatch(fetchCategories());
        },
        
    }
}

const mapStateToProps = (state, ownProps) => {
    const {postReducer, rightbarReducer} = state;
    
    return {
        posts:          postReducer.posts,
        hasMore:        postReducer.hasMore,
        page:           postReducer.page,
        keyword:        postReducer.keyword,
        isSearch:       postReducer.isSearch,
        isPostFetching: postReducer.isPostFetching,
        

        recentPosts:    rightbarReducer.recentPosts,
        topRatings:     rightbarReducer.topRatings,
        topViews:       rightbarReducer.topViews,
        categories:     rightbarReducer.categories
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Blog);