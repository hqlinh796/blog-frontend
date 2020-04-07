import React, { Component } from 'react';
import PostThumbnail from '../postthumbnail/Index';
import PostThumbnailSkeleton from '../postthumbnail/Skeleton';

import {toSlug} from '../../utils/helpers';


class Page extends Component {
    

    handleScroll = (e) => {
       
        if (!this.props.hasMore || this.props.isPostFetching){
            return false;
        }
        
        const loadMore = document.getElementById('load-more');
        const currentOffset = window.pageYOffset + window.innerHeight;
        const loadMoreOffset = loadMore.offsetTop;
       

        if (currentOffset + 100 >= loadMoreOffset){
            
            const keyword = this.props.keyword;
            
            if (this.props.isSearch)
                this.props.searchPost(keyword ,this.props.page + 1, this.props.sortBy);
            else
                this.props.fetchPost(this.props.page + 1, this.props.sortBy);
           //alert('load roi');
        }
    }

    

    getListBlog = () => {
        
        
        let result = [], 
            i = 0, 
            posts = this.props.posts,
            totalPosts = posts.length,
            topic = this.props.topic;
       
        //all topic
        if (topic === "")
            while (i < totalPosts) {
                const blogData = this.props.posts[i];
                result.push(<PostThumbnail post={blogData} key={i} />)
                i++;
            }
        //particular topic
        else
            while (i < totalPosts) {
                if (toSlug(posts[i].category) === topic) {
                    const blogData = this.props.posts[i];
                    
                        result.push(<PostThumbnail post={blogData} key={i} />)
            }
            i++;
        }
        return result;
    }
   

    showSkeletonBlog = () => {
        let result = [], i = 0;
        while (i < 2) {
            result.push(<PostThumbnailSkeleton key={i}></PostThumbnailSkeleton>);
            i++;
        }
        return result;
    }

    render() {
        return (
            <div className="col col-lg-8 blog-post-wrapper">
                {this.getListBlog()}
                {this.props.isPostFetching && this.showSkeletonBlog()}
                <div id="load-more"></div>
            </div>
        );
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount(){
        
        window.removeEventListener('scroll', this.handleScroll);
    }
}

export default Page;