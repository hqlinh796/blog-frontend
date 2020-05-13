import React, { Fragment } from 'react';
import ContentBlog from '../contentpost/Index';
import RelatedPost from '../relatedpost/Index';
import ContentBlogSkeleton from '../contentpost/Skeleton';
import Rating from '../rating/Index';
import Comment from '../comment/Index';
import  './index.css';


const Post = (props) => {
    
    const getLocation = () => window.location.href;
    
    const {cover, title, date, category, author, rating} = props.postDetail;
    return (
        <Fragment>
            <div className="post-detail-cover" style={{backgroundImage: `url(${cover})`}}>
                <div>
                    <h1 className="post-detail-title fc-white">{title}</h1>
                    <div className="date-and-topic m-t-20 fc-white">
                        <img src='/img/calendar.svg' alt='calendar'/>
                        <span className="date-post-detail">{date && new Date(date).toDateString()}</span>
                        &nbsp; |
                        <img src='/img/category.svg' alt='category'/>
                        <span className="topic-post-detail">{category}</span>
                        &nbsp; |
                        <img src='/img/author.svg' alt='author'/>
                        <span className="">{author}</span>
                    </div>
                </div>
            </div>
            <div className="col col-lg-1"></div>
            <div className="left-slide-bar-blog-detail-wrapper p-b-50 col-lg-10 col">
                {!props.isFetching ? <ContentBlog postDetail={props.postDetail}/> : <ContentBlogSkeleton />}
                <Rating
                    rating={rating} 
                    clickToRate={(num) => props.clickToRate(num)}
                    id={props.id} />
                <RelatedPost
                    relatedPosts={props.relatedPosts} />
                <Comment location={getLocation()} />
            </div>
        </Fragment>
    );
}

export default Post;