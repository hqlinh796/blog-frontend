import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Page from '../../components/page/Index';
import RightBar from '../../components/rightbar/Index';
import './Index.css';



import {
    searchPost, 
    fetchPost, 
    resetResult,
    changeSortBy
} from '../../actions/Post.Actions';



class Blog extends Component {
    
    constructor(props) {
        super(props);
        this.state = ({
            category: 'tat-ca'
        })
    }
    
    getTopic = () => {
        let result = this.props.match.params.topic;
        if (result === "tat-ca")
            result = "";
        return result;
    }
    
    handleSortByChange = (e) => {
        const sortBy = e.target.value;
        this.props.changeSortBy(sortBy);
        this.props.resetResult();
        if (this.props.isSearch)
            this.props.search(this.props.keyword, 0, sortBy, this.state.category);
        else
            this.props.fetchPost(0, sortBy, this.state.category);
        
    }

    
    render() {
        const {
            posts,
            hasMore,
            page,
            keyword,
            isSearch,
            isPostFetching
        } = this.props;
        const {
            search,
            fetchPost
        } = this.props;
        
            return (
                <section className="container-blog-content p-t-100">
                    <div className="blog-content-wrapper container">
                        <div className="row">
                            <div className="col col-sm-8 p-tb-30 flex flex-j-sb">
                                <div>
                                    <Link to="/" className="fs-20 fc-black a-hover-to-green">
                                        <i className="fas fa-home" />
                                        &nbsp; Home </Link> >
                                    <Link to="/blog/tat-ca" className="fs-20 fc-black a-hover-to-green"> Blog </Link> >
                                </div>
                                <div>
                                    <label htmlFor="sort-by">Sort by &nbsp;</label>
                                    <select name="" id="sort-by" onChange={(e) => this.handleSortByChange(e)}>
                                        <option value="date">Date</option>
                                        <option value="title">Title</option>
                                        <option value="views">View</option>
                                        <option value="rating">Rating</option>
                                    </select>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            <Page
                                isPostFetching={isPostFetching}
                                page={page}
                                posts={posts}
                                isSearch={isSearch}
                                keyword={keyword}
                                hasMore={hasMore}
                                topic={this.getTopic()}
                                sortBy={this.props.sortBy}
                                fetchPost={(nextPage, sortBy, category) => fetchPost(nextPage, sortBy, category)}
                                searchPost={(keyword, nextPage, sortBy) => search(keyword, nextPage, sortBy)} 
                                />
                        
                            <RightBar />
                        </div>
                    </div>
                </section>
            );
           
    }


    componentDidUpdate(preProps, preState) {
        const currentTopic = this.props.match.params.topic
        if (preProps.match.params.topic !== currentTopic) {
            this.props.resetResult();
            const category = currentTopic === 'tat-ca' ? '' : currentTopic;
            this.setState({
                category: category
            })
            this.props.fetchPost(0, this.props.sortBy, category);
        }
    }
   
    componentDidMount() {
        const nextPage = this.props.page + 1;
        const {topic} = this.props.match.params;
        if (topic) {
            const category = topic === 'tat-ca' ? '' : topic;
            this.setState({
                category: category
            })
            if(!this.props.posts.length)
                this.props.fetchPost(nextPage, this.props.sortBy, category);
        }
        
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        search: (keyword, page, sortBy) => dispatch(searchPost(keyword, page, sortBy)),
        fetchPost: (nextPage, sortBy, category) => {
            dispatch(fetchPost(nextPage, sortBy, category));
        },
        
        resetResult: () => dispatch(
            resetResult()
        ),
        changeSortBy: (sortBy) => {
            dispatch(changeSortBy(sortBy))
        }
        
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
        isPostFetching: reducer.isPostFetching,
        sortBy:         reducer.sortBy,
        categories:     state.rightbarReducer.categories
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Blog);