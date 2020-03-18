import React, { Component } from 'react';
import TopPostItem from './TopPostItem';
import TopAndRecentPostSkeleton from './TopAndRecentPostSkeleton';


class TopPost extends Component {

    // getTopPostItem = topPosts => {
    //     let result = [];
    //     for (let i = 0; i< 5; i++){
    //         result.push(
    //             <TopPostItem thumbnail={singlePost.cover} title={singlePost.title} id={singlePost._id} rate={singlePost.rate} key={i}/>
    //         )
    //     }
    //     return result;
    // }

    showTopPosts = (topPostsArray) => {
        if (topPostsArray.length > 0) {
            return topPostsArray.map((data, index) => 
                <TopPostItem thumbnail={data.cover} title={data.title} id={data.id} rate={data.rate} key={index}/>
            )
        }
    }

    showTopPostSkeleton = () => {
        let i = 0, result = [];
        for ( ; i < 5 ; i++)
            result.push(
                <TopAndRecentPostSkeleton key={i}/>
            )
        return result;
    }

    render() {
        return (
            <div className="blog-slide-bar-top-post m-t-50">
                <h1 className="f-bold fs-22 m-b-50">Top posts</h1>
                
                { !this.props.isTopPostFetching && this.showTopPosts(this.props.topPosts) }
                { this.props.isTopPostFetching && this.showTopPostSkeleton() }

            </div>

        );
    }
}

export default TopPost;