import React, { Component } from 'react';
import ContentBlog from './ContentBlog';
import RelatedPost from './RelatedPost';
import ListComment from './ListComment';
import WriteComment from './WriteComment';
import ContentBlogSkeleton from './ContentBlogSkeleton';
import Rate from './Rate';


class LeftSlideBarBD extends Component {
    
    showPostDetail = (postDetail) => {
        if (postDetail)
            return <ContentBlog postDetail={postDetail}/>
    }
    showPostDetailSkeleton = () => {
        return <ContentBlogSkeleton />
    }
    getComments = (comments) => {
        console.log(this.props);
        if (comments)
            return comments;
        return [];
    }
    render() {    
        const {postDetail} = this.props;
        return (
            <div className="left-slide-bar-blog-detail-wrapper bg-white p-b-50 col-lg-8 col">
                { !this.props.isFetching && this.showPostDetail(postDetail) }
                { this.props.isFetching && this.showPostDetailSkeleton() }
                <Rate rate={postDetail.rate} clickToRate={(num) => this.props.clickToRate(num)} id={this.props.id}/>

                <RelatedPost relatedPosts={this.props.relatedPosts}/>

                <ListComment comments={this.getComments(postDetail.comments)}/>
                <WriteComment/>
             </div>
        );
    }
}

export default LeftSlideBarBD;