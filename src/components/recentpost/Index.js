import React, { Component } from 'react';
import RecentPostItem from './Item';
import RightBarItemSkeleton from '../rightbaritem/Skeleton';

class RecentPost extends Component {

    showRecentPosts = (recentPostArray) => {
        if (recentPostArray.length > 0)
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
}

export default RecentPost;