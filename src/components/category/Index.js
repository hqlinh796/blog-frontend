import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Index.css';
import CategoryItem from './Item';
import { fetchCategories } from '../../actions/RightBar.Actions';


const Category = (props) => {



    const getTotalPosts = (data) =>
        data.reduce((total, categoryItem) => {
            return total += categoryItem.posts.length;
        }, 0)


    const showCategories = (categories) =>
        categories.map((singleCategory, key) => {
            return <CategoryItem id={singleCategory._id} name={singleCategory.name} numberOfPosts={singleCategory.posts.length} key={key} />
        })



    return (
        <div className="blog-slide-bar-category">
            <h1 className="f-bold fs-22 m-b-50">Categories</h1>
            <div>
                <Link to={"/blog/tat-ca"} className="fs-18 fc-2 a-hover-to-green">Tất cả ({getTotalPosts(props.data)})</Link>
            </div>
            {props.data && showCategories(props.data)
            }
        </div>

    );


}

export default Category;