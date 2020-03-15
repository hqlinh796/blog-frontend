import React, { Component } from 'react';
import RecentPostItem from './RecentPostItem';

class RecentPost extends Component {

    getRecentPostItem = (postData) => {
        //console.log('recent post: ' + postData.length);
        const sortedArray = postData.sort(function(a, b){
            return b.date - a.date;
        })
        let result = [];
        for (let i = 0; i < 2; i++)
        
            result.push(
                <RecentPostItem thumbnail={sortedArray[i].cover} id={sortedArray[i]._id} title={sortedArray[i].title} date={sortedArray[i].date} key={i}/>
            )
        return result;
    }

    showRecentPosts = (recentPostArray) => {
        if (recentPostArray.length > 0)
            return recentPostArray.map((data, index) =>
                    <RecentPostItem thumbnail={data.cover} title={data.title} id={data.id} date={data.date} key={index} />)
    }

    render() {
        return (
            <div className="blog-slide-bar-recent-post m-t-50">
                <h1 className="f-bold fs-22 m-b-50">Recent posts</h1>
                {
                    this.showRecentPosts(this.props.recentPosts)
                }
                

            </div>

        );
    }
}

export default RecentPost;