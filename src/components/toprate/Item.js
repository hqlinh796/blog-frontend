import React from 'react';
import { Link } from 'react-router-dom';
import { toSlug } from '../../utils/helpers';
import '../rightbaritem/Index.css';
const TopRatingItem = (props) => {


    const { title, cover, _id, rating } = props.data;
    return (
        <div className="top-post-detail right-bar-item flex flex-a-c m-b-25">
            <img src={cover} alt="" style={{ height: '80px', width: '80px' }} />
            <div className="right-bar-item-text m-l-20 lh-15">
                <Link className="fs-18 fc-black a-hover-to-green" to={'/blog/' + toSlug(title) + '.' + _id} title={title}>
                    {title}
                </Link>
                <p className="fc-2 fs-14">
                    <i className="fas fa-star fc-1" />
                    <span>{rating}</span>
                </p>
            </div>
        </div>
    );

}

export default TopRatingItem;