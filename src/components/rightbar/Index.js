import React from 'react';

import RecentPost from '../recentpost/Index';
import TopRate from '../toprate/Index';
import Tag from '../tag/Index';
import Category from '../category/Index';
import TopView from '../topview/Index';



const RightSlideBar = (props) => {
    const {categories, recentPosts, topRatings, topViews} = props;
    
    return (
        <div className="col col-lg-4 blog-slide-bar-wrapper">
            <Category data = {categories}/>
            <TopView data = {topViews}/>
            <RecentPost data = {recentPosts}/>
            <TopRate data = {topRatings}/>
            <Tag />
        </div>

    );
}
export default RightSlideBar;