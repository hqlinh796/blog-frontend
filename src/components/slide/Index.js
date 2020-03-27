import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../homeslide/Index.css';

class Slide2 extends Component {
    
    

    getTitle = (title) => {
        if (title)
            return title;

        let topic = this.props.match.params.topic;
        if (topic === "tat-ca")
            return "Tất cả";        
        const category = this.props.categories.filter(categoryItem => categoryItem.slug === topic)[0];
        if (category)
            return category.name;
    }

    render() {
        return ( 
                <div className="slide-wrapper">
                    <div className="slide-v2 row m-lr-auto flex flex-a-c flex-j-c">
                        <div className="content-slide txt-center col col-lg-12">
                            <h1 className="fs-40">{this.props.categories && this.getTitle(this.props.title)}</h1>
                        </div>
                    </div>
                </div>
        );
    }

  
}

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.postReducer.categories
    }
}

export default connect(mapStateToProps)(Slide2);