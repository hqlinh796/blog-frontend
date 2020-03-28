import React, { Component } from 'react';
import Search from '../search/Index';
import RecentPost from '../recentpost/Index';
import TopRate from '../toprate/Index';
import Tag from '../tag/Index';
import Category from '../category/Index';
import TopView from '../topview/Index';


class RightSlideBar extends Component {
    
    render() {
        return (
            <div className="col col-lg-4 blog-slide-bar-wrapper">
                <Search keyword={(event, keyword) => this.props.keyword(event, keyword)} input={this.props.input}/>
                <Category />
                <TopView />
                <RecentPost />
                <TopRate />
                <Tag/>
        </div>

        );
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps.isSearch);
        if (nextProps.isSearch)
            return false;
        return true;
    }
    
}

export default RightSlideBar;