import React, { Component } from 'react';
import Search from './Search';
import RecentPost from './RecentPost';
import TopPost from './TopPost';
import Tag from './Tag';
import Category from './Category';


class RightSlideBar extends Component {
    
    render() {
        return (
            <div className="col col-lg-4 blog-slide-bar-wrapper">
                <Search keyword={(event, keyword) => this.props.keyword(event, keyword)} input={this.props.input}/>
                <Category/>
                <RecentPost isRecentPostFetching={this.props.isRecentPostFetching} recentPosts={this.props.recentPosts}/>
                <TopPost isTopPostFetching={this.props.isTopPostFetching} topPosts={this.props.topPosts}/>
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
    componentDidUpdate(){
        console.log("right dip update");
    }
}

export default RightSlideBar;