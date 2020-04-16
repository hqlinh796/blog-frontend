import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {toSlug} from '../../utils/helpers';
import '../relatedpost/Index.css';

class RelatedPostItem extends Component {

    

    render() {
        const {_id, title, cover} = this.props.relatedPost;
        return (
            <div className="col col-md-3 related-post-item">
                <img alt={title} className="related-thumbnail m-b-10" src={cover}></img>
                <Link to={'/blog/' + toSlug(title) + '.' + _id}>{title}</Link>
            </div>
        );
    }
}

export default RelatedPostItem;