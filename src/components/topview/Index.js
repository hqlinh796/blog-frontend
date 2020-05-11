import React from 'react';

import Item from './Item';
import ItemSkeleton from '../rightbaritem/Skeleton';
import '../rightbar/Index.css';



const TopView = (props) => {


    const showTopViews = (TopViewsArray) => {
        if (TopViewsArray.length) {
            return TopViewsArray.map((data, index) => 
                <Item data={data} key={index}/>
            )
        }
    }

    const showTopViewSkeleton = () => {
        let i = 0, result = [];
        for ( ; i < 5 ; i++)
            result.push(
                <ItemSkeleton key={i}/>
            )
        return result;
    }
    
        return (
            <div className="blog-slide-bar-top-post right-bar m-t-50">
                <h1 className="f-bold fs-22 m-b-50">Top Views</h1>
                
                { props.data.length ? showTopViews(props.data) : showTopViewSkeleton()}

            </div>

        );
}


export default TopView;