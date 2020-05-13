import React from 'react';
import {Link} from 'react-router-dom';
import {toSlug} from '../../utils/helpers';
import '../relatedpost/Index.css';

const RelatedPostItem = (props) => {

    const { _id, title, cover } = props.relatedPost;
    return (
        <div className="col col-md-4 related-post-item">
            <div>
                <Link to={'/blog/' + toSlug(title) + '.' + _id}>
                    <img alt={title} className="related-thumbnail m-b-10" src={cover} />
                </Link>
                
            </div>
            <Link to={'/blog/' + toSlug(title) + '.' + _id}>{title}</Link>
        </div>
    );

}

export default RelatedPostItem;