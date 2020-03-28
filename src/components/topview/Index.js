import React, { Component } from 'react';
import {connect} from 'react-redux';
import Item from './Item';
import ItemSkeleton from '../rightbaritem/Skeleton';
import '../rightbar/Index.css';

import {fetchTopViews} from '../../actions/RightBar.Actions';

class TopView extends Component {


    showTopViews = (TopViewsArray) => {
        if (TopViewsArray.length) {
            return TopViewsArray.map((data, index) => 
                <Item data={data} key={index}/>
            )
        }
    }

    showTopViewSkeleton = () => {
        let i = 0, result = [];
        for ( ; i < 5 ; i++)
            result.push(
                <ItemSkeleton key={i}/>
            )
        return result;
    }

    render() {
        return (
            <div className="blog-slide-bar-top-post right-bar m-t-50">
                <h1 className="f-bold fs-22 m-b-50">Top View</h1>
                
                { !this.props.isTopViewFetching && this.showTopViews(this.props.topViews) }
                { this.props.isTopViewFetching && this.showTopViewSkeleton() }

            </div>

        );
    }
    componentDidMount(){
        if (!this.props.topViews.length){
            console.log("mount");
            this.props.fetchTopViews();
        }
            
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        topViews: state.rightbarReducer.topViews,
        isTopViewFetching: state.rightbarReducer.isTopViewFetching
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchTopViews: () => {
            dispatch(fetchTopViews())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopView)