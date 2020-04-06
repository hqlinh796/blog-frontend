import React, { Component } from 'react';
import {connect} from 'react-redux';
import Item from './Item';
import ItemSkeleton from '../rightbaritem/Skeleton';
import '../rightbar/Index.css';

import {fetchTopRatings} from '../../actions/RightBar.Actions';
class TopRate extends Component {

    showTopRatings = (topRatingsArray) => {
        if (topRatingsArray.length) {
            return topRatingsArray.map((data, index) => 
                <Item data={data} key={index}/>
            )
        }
    }

    showTopRatingSkeleton = () => {
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
                <h1 className="f-bold fs-22 m-b-50">Top Ratings</h1>
                
                { !this.props.isTopRatingFetching && this.showTopRatings(this.props.topRatings) }
                { this.props.isTopRatingFetching && this.showTopRatingSkeleton() }

            </div>

        );
    }

    componentDidMount(){
        if (!this.props.topRatings.length)
            this.props.fetchTopRatings();
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        topRatings: state.rightbarReducer.topRatings,
        isTopRatingFetching: state.rightbarReducer.isTopRatingFetching
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchTopRatings: () => {
            dispatch(fetchTopRatings())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopRate)