import React, { Component } from 'react';
import Item from './Item';
import ItemSkeleton from '../rightbaritem/Skeleton';
import '../rightbar/Index.css';

class TopRate extends Component {

    showTopRates = (topRatesArray) => {
        if (topRatesArray.length > 0) {
            return topRatesArray.map((data, index) => 
                <Item data={data} key={index}/>
            )
        }
    }

    showTopRateSkeleton = () => {
        let i = 0, result = [];
        for ( ; i < 5 ; i++)
            result.push(
                <ItemSkeleton key={i}/>
            )
        return result;
    }

    render() {
        return (
            <div className="blog-slide-bar-top-rate right-bar m-t-50">
                <h1 className="f-bold fs-22 m-b-50">Top Rate</h1>
                
                { !this.props.isTopRateFetching && this.showTopRates(this.props.topRates) }
                { this.props.isTopRateFetching && this.showTopRateSkeleton() }

            </div>

        );
    }
}

export default TopRate;