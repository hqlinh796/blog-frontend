import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Page from '../../components/page/Index';
import RightBar from '../../components/rightbar/Index';
import './Index.css';



import {
    searchPost, 
    fetchPost, 
    resetResult
} from '../../actions/Post.Actions';



class Blog extends Component {
    constructor(props) {
        //console.log(props.match.params);
        
        super(props);
        this.state = ({
            isSearch: false,
            keyword: ""
        })
    }
    

    // search = (event, keyword) => {
    //     event.preventDefault();
    //     if (keyword !== ""){
    //         this.setState({
    //             keyword: keyword,
    //             isSearch: true
    //         })
    //         return;
    //     }
    //     this.setState({
    //         keyword: keyword,
    //         isSearch: false
    //     })

    // }

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
    
    handleSortByChange = (e) => {
        const sortBy = e.target.value;
        this.props.fetchPost(0, sortBy);
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
                                        <i class="fas fa-home" />
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
                        fetchPost={(nextPage, sortBy) => fetchPost(nextPage, sortBy)}
                        searchPost={(keyword, nextPage) => search(keyword, nextPage)} />
                        
                        <RightBar         
                        isSearch={isSearch} 
                        keyword={(event, keyword) => this.search(event, keyword)} 
                        posts={posts} 
                        />
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
        if(!this.props.posts.length)
            this.props.fetchPost(nextPage);
        
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        search: (keyword, page) => dispatch(searchPost(keyword, page)),
        fetchPost: (nextPage, sortBy) => {
            dispatch(fetchPost(nextPage, sortBy));
        },
        
        resetResult: () => dispatch(
            resetResult()
        ),
        
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
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Blog);