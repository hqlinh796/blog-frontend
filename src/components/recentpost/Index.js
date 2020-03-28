import React, { Component } from 'react';
import {connect} from 'react-redux';

import RecentPostItem from './Item';
import RightBarItemSkeleton from '../rightbaritem/Skeleton';
import {fetchRecentPosts} from '../../actions/RightBar.Actions';
import '../rightbar/Index.css';

class RecentPost extends Component {

    showRecentPosts = (recentPostArray) => {
        if (recentPostArray.length)
            return recentPostArray.map((data, index) =>
                    <RecentPostItem data={data} key={index} />)
    }

    showRecentPostSkeleton = () => {
        let i = 0, result = [];
        for ( ; i < 5 ; i++)
            result.push(
                <RightBarItemSkeleton key={i}/>
            )
        return result;
    }

    render() {
        return (
            <div className="blog-slide-bar-recent-post right-bar m-t-50">
                <h1 className="f-bold fs-22 m-b-50">Recent posts</h1>
                
                { !this.props.isRecentPostFetching && this.showRecentPosts(this.props.recentPosts) }
                { this.props.isRecentPostFetching && this.showRecentPostSkeleton() }

            </div>

        );
    }

    componentDidMount(){
        if (!this.props.recentPosts.length)
            this.props.fetchRecentPosts();
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        recentPosts: state.rightbarReducer.recentPosts,
        isRecentPostFetching: state.rightbarReducer.isRecentPostFetching
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchRecentPosts: () => {
            dispatch(fetchRecentPosts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentPost)