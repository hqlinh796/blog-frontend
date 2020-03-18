import React, { Component } from 'react';
import BlogThumbnail from './BlogThumbnail';
import BlogThumbnailSkeleton from './BlogThumbnailSketelon';



class LeftSlideBar extends Component {
    
    toSlug = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }

    getListBlog = (page) => {
        
        const numOfPostsPerPage = 2;
        let result = [], 
            i = page*numOfPostsPerPage, 
            posts = this.props.posts,
            totalPosts = posts.length,
            topic = this.props.topic;
       
        //all topic
        if (topic === "")
            while (result.length < 5 && i < totalPosts) {
                const blogData = this.props.posts[i];
                if (blogData.title.toLowerCase().indexOf(this.props.keyword.toLowerCase()) !== -1)
                    result.push(<BlogThumbnail id={blogData._id} cover={blogData.cover} title={blogData.title}
                        date={blogData.date} category={blogData.category}
                        description={blogData.description} numOfComments={blogData.numOfComments} key={i} />)
                i++;
            }
        //particular topic
        else
            while (result.length < 5 && i < totalPosts) {
                if (this.toSlug(posts[i].category) === topic) {
                    const blogData = this.props.posts[i];
                    if (blogData.title.toLowerCase().indexOf(this.props.keyword.toLowerCase()) !== -1)
                        result.push(<BlogThumbnail id={blogData._id} cover={blogData.cover} title={blogData.title} 
                            date={blogData.date} category={blogData.category} 
                            description={blogData.description} numOfComments={blogData.numOfComments} key={i} />)
                }
                i++;
            }
        return result;
    }
    changePageNumber = newPage => {
        
    }

    showSkeletonBlog = () => {
        let result = [], i = 0;
        while (i < 5) {
            result.push(<BlogThumbnailSkeleton key={i}></BlogThumbnailSkeleton>);
            i++;
        }
        return result;
    }

    render() {
        return (
            <div className="col col-lg-8 blog-post-wrapper">
                {!this.props.isPostFetching && this.getListBlog(this.props.page)}
                {this.props.isPostFetching && this.showSkeletonBlog()}
            </div>
        );
    }
}

export default LeftSlideBar;