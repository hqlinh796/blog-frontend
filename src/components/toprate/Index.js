import React from 'react';

import Item from './Item';
import ItemSkeleton from '../rightbaritem/Skeleton';
import '../rightbar/Index.css';

const TopRate = (props) => {

    const showTopRatings = (topRatingsArray) => {
        if (topRatingsArray.length) {
            return topRatingsArray.map((data, index) => 
                <Item data={data} key={index}/>
            )
        }
    }

    const showTopRatingSkeleton = () => {
        let i = 0, result = [];
        for ( ; i < 5 ; i++)
            result.push(
                <ItemSkeleton key={i}/>
            )
        return result;
    }

        return (
            <div className="blog-slide-bar-top-rate right-bar m-t-50">
                <h1 className="f-bold fs-22 m-b-50">Top Ratings</h1>
                
                { props.data.length  ? showTopRatings(props.data) : showTopRatingSkeleton()}

            </div>

        );

}


export default TopRate;