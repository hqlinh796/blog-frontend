import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import CategoryItem from './CategoryItem';
import CategoryData from '../../data/categories.json'

class Category extends Component {

    getCategoryItem = categoryData => {
        
    }
    
    getTotalPosts = (data) => {
        return data.reduce((total, categoryItem) => {
            return total += categoryItem.numberOfPosts;
        }, 0)
    }

    render() {
        return (
            <div className="blog-slide-bar-category m-t-50">
                <h1 className="f-bold fs-22 m-b-50">Category</h1>
                <Link to={"/blog/tat-ca"} className="fs-18 fc-2 a-hover-to-green">Tất cả ({this.getTotalPosts(CategoryData)})</Link>
                {
                    CategoryData.map((singleCategory, key) => {
                        return <CategoryItem id={singleCategory.id} name={singleCategory.name} numberOfPosts={singleCategory.numberOfPosts} key={key}/>
                    })
                }
            </div>

        );
    }
}

export default Category;