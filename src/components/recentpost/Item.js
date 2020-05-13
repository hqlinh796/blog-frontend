import React from 'react';
import {Link} from 'react-router-dom';
import {toSlug} from '../../utils/helpers';
import '../rightbaritem/Index.css';

const RecentPostItem = (props) => {

    const getFullDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = date.getDate(),
            month = date.getMonth() + 1,
            year = date.getFullYear();
        return day + '/' + month + '/' + year;
    }


    const { title, cover, _id, date } = props.data;
    return (
        <div className="recent-post-detail right-bar-item flex flex-a-c m-b-25">
            <img src={cover} alt={title} />
            <div className="right-bar-item-text m-l-20 lh-15">
                <Link className="fs-18 fc-black a-hover-to-green" to={'/blog/' + toSlug(title) + '.' + _id} title={title}>
                    {title}
                </Link>
                <p className="fc-2 fs-14">{getFullDate(date)}</p>
            </div>
        </div>

    );

}

export default RecentPostItem;