import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';


class BlogThumbnailSkeleton extends Component {
    
  
    //https://freetuts.net/tao-slug-tu-dong-bang-javascript-va-php-199.html
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

    getDate = (timestamp)=>{
        const date = new Date(timestamp);
        return date.getDate();
    }

    getMonth = (timestamp)=>{
        const date = new Date(timestamp);
        switch (date.getMonth()) {
            case 0:
                return 'Jan';
            case 1:
                return 'Feb';
            case 2:
                return 'Mar';
            case 3:
                return 'Apr';
            case 4:
                return 'May';
            case 5:
                return 'Jun';
            case 6:
                return 'Jul';
            case 7:
                return 'Aug';
            case 8:
                return 'Sep';
            case 9:
                return 'Oct';
            case 10:
                return 'Nov';
            case 11:
                return 'Dec';
            default:
                return 'Error'
        }
        
    }

    render() {
        console.log("blog thumbnail render");
        return (
            
            <div className="post-overview m-b-100">
                <div className="cover-skeleton">
                    <Skeleton width={750} height={300}/>
                </div>
                <div className="post-text-detail p-t-70 p-b-40 p-lr-30">
                    <div className="date-post">
                        <div className="lh-13 txt-center">
                            <p className="fs-23 f-bold"><Skeleton/></p>
                            <p className="fs-20"><Skeleton/></p>
                        </div>
                    </div>
                    <p className="fs-23 f-bold fc-black a-hover-to-green"><Skeleton/></p>
                    <p className="description-post fs-19 m-tb-20 lh-15 fc-2">
                        <Skeleton/>
                    </p>
                    <div className="topic-and-comment fc-2">
                        
                        <span><Skeleton/></span>
                        &nbsp;
                        
                        &nbsp;
                        
                        &nbsp;
                         <span><Skeleton/></span>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default BlogThumbnailSkeleton;