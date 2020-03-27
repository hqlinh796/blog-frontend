import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {toSlug} from '../../utils/helpers';
import './Index.css';

class CategoryItem extends Component {

    render() {
        const {name, numberOfPosts} = this.props;
        return (
            <div>
                <Link to={"/blog/" + toSlug(name)} className="fs-18 fc-2 a-hover-to-green">{name} ({numberOfPosts})</Link>
            </div>
        );
    }
}

export default CategoryItem;