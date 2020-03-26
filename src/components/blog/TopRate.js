import React, { Component } from 'react';
import TopRateItem from './TopRateItem';
import RightBarItemSkeleton from './RightBarItemSkeleton';


class TopRate extends Component {

    // getTopRateItem = topRates => {
    //     let result = [];
    //     for (let i = 0; i< 5; i++){
    //         result.push(
    //             <TopRateItem thumbnail={singleRate.cover} title={singleRate.title} id={singleRate._id} rate={singleRate.rate} key={i}/>
    //         )
    //     }
    //     return result;
    // }

    showTopRates = (topRatesArray) => {
        if (topRatesArray.length > 0) {
            return topRatesArray.map((data, index) => 
                <TopRateItem thumbnail={data.cover} title={data.title} id={data.id} rate={data.rate} key={index}/>
            )
        }
    }

    showTopRateSkeleton = () => {
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
                <h1 className="f-bold fs-22 m-b-50">Top Rate</h1>
                
                { !this.props.isTopRateFetching && this.showTopRates(this.props.topRates) }
                { this.props.isTopRateFetching && this.showTopRateSkeleton() }

            </div>

        );
    }
}

export default TopRate;