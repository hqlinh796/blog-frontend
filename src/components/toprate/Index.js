import React, { Component } from 'react';
import {connect} from 'react-redux';
import Item from './Item';
import ItemSkeleton from '../rightbaritem/Skeleton';
import '../rightbar/Index.css';

import {fetchTopRates} from '../../actions/RightBar.Actions';
class TopRate extends Component {

    showTopRates = (topRatesArray) => {
        if (topRatesArray.length) {
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

    componentDidMount(){
        if (!this.props.topRates.length)
            this.props.fetchTopRates();
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        topRates: state.rightbarReducer.topRates,
        isTopRateFetching: state.rightbarReducer.isTopRateFetching
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchTopRates: () => {
            dispatch(fetchTopRates())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopRate)