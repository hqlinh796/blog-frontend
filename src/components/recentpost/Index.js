import React from 'react';
import RecentPostItem from './Item';
import RightBarItemSkeleton from '../rightbaritem/Skeleton';
import '../rightbar/Index.css';

const RecentPost = (props) => {

    const showRecentPosts = (recentPostArray) => {
        if (recentPostArray.length)
            return recentPostArray.map((data, index) =>
                <RecentPostItem data={data} key={index} />)
    }

    const showRecentPostSkeleton = () => {
        let i = 0, result = [];
        for (; i < 5; i++)
            result.push(
                <RightBarItemSkeleton key={i} />
            )
        return result;
    }


    return (
        <div className="blog-slide-bar-recent-post right-bar m-t-50">
            <h1 className="f-bold fs-22 m-b-50">Recent Posts</h1>

            {props.data.length ? showRecentPosts(props.data) : showRecentPostSkeleton()}

        </div>

    );

}


export default RecentPost;