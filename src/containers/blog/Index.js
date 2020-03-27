import React, { Component } from 'react';
import {connect} from 'react-redux';

import Page from '../../components/page/Index';
import RightBar from '../../components/rightbar/Index';
import './Index.css';
//import SearchResult from '../components/blog/SearchResult';


import {
    searchPost, 
    fetchPost, 
    fetchTopRate, 
    fetchRecentPost, 
    resetResult, 
    fetchCategories, 
    fetchTopView
} from '../../actions/Post.Actions';



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
        //const nextPage = this.props.page + 1;
        //reset posts array
        this.props.resetResult();

        if (keyword === '')
            this.props.fetchPost(0);
        else
            this.props.search(keyword, 0);
    }
    
    
    render() {
        const {
            posts,
            hasMore,
            page,
            keyword,
            isSearch,
            topRates,
            recentPosts,
            topViews,
            isPostFetching,
            isTopRateFetching,
            isRecentPostFetching,
            isTopViewFetching,
            categories
        } = this.props;
        const {
            search,
            fetchPost
        } = this.props;
        
            return (
                <section className="container-blog-content p-t-100">
                    <div className="blog-content-wrapper container">
                        
                        <div className="row">
                        <Page isPostFetching={isPostFetching} page={page} posts={posts} isSearch={isSearch} 
                        keyword={keyword} hasMore={hasMore} topic={this.getTopic()} fetchPost={(nextPage) => fetchPost(nextPage)}
                        searchPost={(keyword, nextPage) => search(keyword, nextPage)} />
                        
                        <RightBar 
                        isTopRateFetching={isTopRateFetching}       topRates={topRates}
                        isRecentPostFetching={isRecentPostFetching} recentPosts={recentPosts} 
                        isTopViewFetching={isTopViewFetching}       topViews={topViews}                    
                        isSearch={isSearch}                         keyword={(event, keyword) => this.search(event, keyword)} 
                    
                        posts={posts} 
                        categories={categories}/>

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
        if(!this.props.posts)
            this.props.fetchPost(nextPage);
        //haven't fetch right bar item
        if (this.props.topRates.length === 0){
            this.props.fetchRecentPost();
            this.props.fetchTopRate();
            this.props.fetchTopView();
        }
        if (this.props.categories.length === 0)
            this.props.fetchCategories();

        window.scrollTo(0, 0);
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        search: (keyword, page) => dispatch(searchPost(keyword, page)),
        fetchPost: (nextPage) => {
            dispatch(fetchPost(nextPage));
        },
        fetchRecentPost: () => dispatch(
            fetchRecentPost()
        ),
        fetchTopRate: () => dispatch(
            fetchTopRate()
        ),
        fetchTopView: () => dispatch (fetchTopView()),
        resetResult: () => dispatch(
            resetResult()
        ),
        fetchCategories: () => dispatch(fetchCategories())
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
        topRates:       reducer.topRates,
        recentPosts:    reducer.recentPosts,
        topViews:       reducer.topViews,
        isPostFetching: reducer.isPostFetching,
        isTopRateFetching: reducer.isTopPostFetching,
        isRecentPostFetching: reducer.isRecentPostFetching,
        isTopViewFetching:  reducer.isTopViewFetching,
        categories:     reducer.categories
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Blog);