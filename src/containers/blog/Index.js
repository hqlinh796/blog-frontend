import React, { Component } from 'react';
import {connect} from 'react-redux';

import Page from '../../components/page/Index';
import RightBar from '../../components/rightbar/Index';
import './Index.css';
//import SearchResult from '../components/blog/SearchResult';
import RecentPost from '../../components/recentpost/Index'

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
                        <Page 
                        isPostFetching={isPostFetching} 
                        page={page} 
                        posts={posts} 
                        isSearch={isSearch} 
                        keyword={keyword} 
                        hasMore={hasMore} 
                        topic={this.getTopic()} 
                        fetchPost={(nextPage) => fetchPost(nextPage)}
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
        fetchPost: (nextPage) => {
            dispatch(fetchPost(nextPage));
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