import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../homeslide/Index.css';

import {setCover} from '../../actions/Header.Actions';

class Slide extends Component {
    
    

    getTitle = () => {
        let topic = this.props.match.params.topic;
        if (!topic) {
            topic = this.props.topic;
            const category = this.props.categories.filter(categoryItem => categoryItem.name === topic)[0];
            if (category) {
                this.props.setCover(category.cover);
                return category.name;
            }
        }
            
        
        
        if (topic === "tat-ca") {
            this.props.setCover("https://images.unsplash.com/photo-1528697203043-733dafdaa316?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80");
            return "Tất cả";  
        }

        const category = this.props.categories.filter(categoryItem => categoryItem.slug === topic)[0];
        if (category) {
            
            this.props.setCover(category.cover);
            return category.name;
        }
            
    }

    render() {
        return ( 
                <div className="slide-wrapper">
                    <div className="slide-v2 row m-lr-auto flex flex-a-c flex-j-c">
                        <div className="content-slide txt-center col col-lg-12">
                            <h1 className="fs-40">{this.props.categories.length && this.getTitle()}</h1>
                        </div>
                    </div>
                </div>
        );
    }
    shouldComponentUpdate(nextProps) {
        if (this.props.match.params.topic) {
            const currentTopic = this.props.match.params.topic,
                  nextTopic = nextProps.match.params.topic;
            if (currentTopic === nextTopic && this.props.categories.length)
                return false;
        }
        
        return true;
    }
  
}



const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setCover: (url) => 
            dispatch(setCover(url))
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.rightbarReducer.categories,
        topic: state.postDetailReducer.postDetail.category
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slide);