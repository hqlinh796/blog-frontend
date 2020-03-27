import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {toSlug} from '../../utils/helpers';
import '../rightbaritem/Index.css';
class TopRateItem extends Component {

    render() {
        const {title, cover, _id, rate} = this.props.data;
        return (
            <div className="top-post-detail right-bar-item flex flex-a-c m-b-25">
                <img src={cover} alt="" />
                <div className="right-bar-item-text m-l-20 lh-15">
                    <Link className="fs-18 fc-black a-hover-to-green" to={'/blog/' + toSlug(title) + '.' + _id} title={title}>
                        {title}
                    </Link>
                    <p className="fc-2 fs-14">
                        <i className="fas fa-star fc-1" />
                        <span>{rate}</span>
                    </p>
                </div>
            </div>   
        );
    }
}

export default TopRateItem;