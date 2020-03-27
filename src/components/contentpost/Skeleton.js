import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import '../contentpost/Index.css';

class ContentBlogSkeleton extends Component {
      
    render() {
        return (
            <div className="post-detail fs-18">
                <div className="cover-skeleton">
                    <Skeleton width={750} height={300}/>
                </div>
                <div className="p-lr-30 p-tb-40">
                    <h1 className="fs-25 f-bold">
                        <Skeleton />
                    </h1>
                    <div className="date-and-topic fs-14 m-t-20">
                        <span className="date-post-detail">
                            <Skeleton />
                        </span>
                    </div>
                    <div className="cre-post fs-14"> 
                        <span className="">
                            <Skeleton />
                        </span>
                    </div>
                    <div className="post-content fc-2 lh-15">
                        <Skeleton count={15}/>
                    </div>
                </div>
            </div>

        );
    }
}

export default ContentBlogSkeleton;