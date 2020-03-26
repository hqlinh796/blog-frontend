import React, { Component } from 'react';
import TopViewItem from './TopViewItem';
import RightBarItemSkeleton from './RightBarItemSkeleton';


class TopView extends Component {

    // getTopViewItem = TopViews => {
    //     let result = [];
    //     for (let i = 0; i< 5; i++){
    //         result.push(
    //             <TopViewItem thumbnail={singleRate.cover} title={singleRate.title} id={singleRate._id} rate={singleRate.rate} key={i}/>
    //         )
    //     }
    //     return result;
    // }

    showTopViews = (TopViewsArray) => {
        if (TopViewsArray.length > 0) {
            return TopViewsArray.map((data, index) => 
                <TopViewItem thumbnail={data.cover} title={data.title} id={data.id} countView={data.countView} key={index}/>
            )
        }
    }

    showTopViewSkeleton = () => {
        let i = 0, result = [];
        for ( ; i < 5 ; i++)
            result.push(
                <RightBarItemSkeleton key={i}/>
            )
        return result;
    }

    render() {
        return (
            <div className="blog-slide-bar-top-post m-t-50">
                <h1 className="f-bold fs-22 m-b-50">Top View</h1>
                
                { !this.props.isTopViewFetching && this.showTopViews(this.props.topViews) }
                { this.props.isTopViewFetching && this.showTopViewSkeleton() }

            </div>

        );
    }
}

export default TopView;