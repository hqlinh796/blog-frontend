import React from 'react';
import {Link} from 'react-router-dom';
import {toSlug} from '../../utils/helpers';
import './Index.css';

const PostThumbnail = (props) => {
    
    

    const getDate = (timestamp)=>{
        const date = new Date(timestamp);
        return date.getDate();
    }

    const getMonth = (timestamp)=>{
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

    const calculateAverageRating = (arr) => {
        const avg = arr.reduce((total, value) => total = parseInt(total) + parseInt(value)) / arr.length;
        return Math.round(avg * 100) / 100;
    }

    
        const {title, description, date, cover, tags, _id, category, rating} = props.post;
        return (
            
            <div className="post-overview m-b-100">
                <img src={cover }  alt="thumbnail-blog-detail" className="post-img-thumbnail" />
                <div className="post-text-detail p-t-70 p-b-40 p-lr-30">
                    <div className="date-post">
                        <div className="lh-13 txt-center">
                            <p className="fs-23 f-bold">{getDate(parseInt(date)) }</p>
                            <p className="fs-20">{getMonth(parseInt(date)) }</p>
                        </div>
                    </div>
                    <Link to={"/blog/" + toSlug(title) + "." + _id} className="fs-23 f-bold fc-black a-hover-to-green">{title }</Link>
                    <p className="description-post fs-19 m-tb-20 lh-15 fc-2">
                        {description }
                    </p>
                    <div className="topic-and-comment fc-2 m-b-10">
                        <i className="fas fa-book-open" />
                        &nbsp;
                        <span>{category}</span>
                        &nbsp;
                        <span> | </span>
                        &nbsp;
                        <i className="fas fa-star" />
                        &nbsp;
                        {calculateAverageRating(rating)}
                    </div>
                    <div className="tags">
                        <span>Tags: </span>
                        {tags.map((tag, index) => {
                        return <Link to="#" key={index}>#{tag} </Link>
                        })}
                    </div>
                </div>
            </div>
        );
}

export default PostThumbnail;