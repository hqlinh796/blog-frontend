import React, { Component } from 'react';
import Search from './Search';
import RecentPost from './RecentPost';
import TopRate from './TopRate';
import Tag from './Tag';
import Category from './Category';
import TopView from './TopView';


class RightSlideBar extends Component {
    
    render() {
        return (
            <div className="col col-lg-4 blog-slide-bar-wrapper">
                <Search keyword={(event, keyword) => this.props.keyword(event, keyword)} input={this.props.input}/>
                <Category categories={this.props.categories}/>
                <RecentPost isRecentPostFetching={this.props.isRecentPostFetching} recentPosts={this.props.recentPosts}/>
                <TopRate isTopRateFetching={this.props.isTopRateFetching} topRates={this.props.topRates}/>
                <TopView isTopViewFetching={this.props.isTopViewFetching} topViews={this.props.topViews} />
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