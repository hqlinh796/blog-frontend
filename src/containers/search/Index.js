import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import queryString from 'query-string'

import Messenger from '../../components/messenger/Index';
import Footer from '../../components/footer/Index';
import BackToTop from '../../components/backtotop/Index';
import SearchText from '../../components/searchtext/Index';
import Page from '../../components/page/Index';
import RightBar from '../../components/rightbar/Index';
import Nav from '../../components/nav/Index';

import { searchPost, resetResult, changeSortBy } from '../../actions/Post.Actions';
import { fetchRecentPosts, fetchCategories, fetchTopRatings, fetchTopViews } from '../../actions/RightBar.Actions';



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
        searchPost,
        resetResult
    } = props;

    const [category, setCategory] = useState('');
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        const parsed = queryString.parse(props.location.search),
            keyword = parsed.keyword;
        //const category = topic === 'tat-ca' ? '' : topic;
        setKeyword(keyword);
    }, [props.location.search])

    
    useEffect(() => {
        resetResult();
        searchPost(keyword, 0, 'date', category)
    }, [keyword, category])

    useEffect(() => {
        document.title = `Search for ${keyword}`;
        if (!props.recentPosts.length) {
            props.fetchRecentPosts();
            props.fetchTopRatings();
            props.fetchTopViews();
            props.fetchCategories();
        }
    }, [])

    const fetchMorePost = () => {
        if (hasMore && !isPostFetching)
            searchPost(keyword, page + 1, 'date', category);
    }


    return (
        <Fragment>
            <Nav />
            <Messenger />
            <section className="container-blog-content p-t-50">
                <div className="blog-content-wrapper container">
                    <div className="row">
                        <SearchText keyword={keyword} />
                    </div>
                    <div className="row">
                        <Page
                            isPostFetching={isPostFetching}
                            page={page}
                            posts={posts}
                            fetchMorePost={fetchMorePost}

                        />
                        <RightBar 
                            recentPosts = {recentPosts}
                            categories = {categories}
                            topRatings = {topRatings}
                            topViews = {topViews}
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
        searchPost: (keyword, nextPage, sortBy, category) => {
            dispatch(searchPost(keyword, nextPage, sortBy, category));
        },

        resetResult: () => dispatch(
            resetResult()
        ),
        changeSortBy: (sortBy) => {
            dispatch(changeSortBy(sortBy))
        },
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

const mapStateToProps = (state) => {
    const {postReducer, rightbarReducer} = state;

    return {
        posts: postReducer.posts,
        hasMore: postReducer.hasMore,
        page: postReducer.page,
        keyword: postReducer.keyword,
        isSearch: postReducer.isSearch,
        isPostFetching: postReducer.isPostFetching,

        recentPosts:    rightbarReducer.recentPosts,
        topRatings:     rightbarReducer.topRatings,
        topViews:       rightbarReducer.topViews,
        categories:     rightbarReducer.categories
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Blog);