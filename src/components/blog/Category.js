import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import CategoryItem from './CategoryItem';


class Category extends Component {

    getCategoryItem = categoryData => {
        
    }
    
    getTotalPosts = (data) => {
        return data.reduce((total, categoryItem) => {
            return total += categoryItem.posts.length;
        }, 0)
    }

    showCategories = (categories) => {
        return categories.map((singleCategory, key) => {
            return <CategoryItem id={singleCategory._id} name={singleCategory.name} numberOfPosts={singleCategory.posts.length} key={key}/>
         })
    }

    render() {
        return (
            <div className="blog-slide-bar-category m-t-50">
                <h1 className="f-bold fs-22 m-b-50">Category</h1>
                <div>
                    <Link to={"/blog/tat-ca"} className="fs-18 fc-2 a-hover-to-green">Tất cả ({this.getTotalPosts(this.props.categories)})</Link>
                </div>
                { this.props.categories && this.showCategories(this.props.categories)
                }
            </div>

        );
    }
    
}

export default Category;