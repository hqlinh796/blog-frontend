import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../homeslide/Index.css';

import {setCover} from '../../actions/Header.Actions';

const urlCoverBlog = 'https://images.unsplash.com/photo-1528697203043-733dafdaa316?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';

class Slide extends Component {
    
   

    setTitle = () => {
        if (this.props.match.params.id) {
            if (!this.props.topic)
                return;
            const category = this.props.categories.filter(category => category.name === this.props.topic)[0];
            this.props.setCover(category.cover);
            //return this.props.topic;
        }
            
        let topic = this.props.match.params.topic;

        //topic = this.props.topic;
        const category = this.props.categories.filter(categoryItem => categoryItem.slug === topic)[0];
        if (category) {
            this.props.setCover(category.cover);
            //return category.name;
        } else {
            this.props.setCover(urlCoverBlog);
            //return 'Tất cả';
        }
        
    }

    render() {
        return ( 
                <div className="slide-wrapper">
                    <div className="slide-v2 row m-lr-auto flex flex-a-c flex-j-c">
                        <div className="content-slide txt-center col col-lg-12">
                            <h1 className="fs-40">{this.props.categories.length ? this.setTitle() : ''}</h1>
                        </div>
                    </div>
                </div>
        );
    }
    shouldComponentUpdate(nextProps) {
        
        const currentTopic = this.props.match.params.topic;
        console.log(`${this.props.match.params.topic} ${nextProps.match.params.topic}`);
        if (currentTopic) {
            if (currentTopic !== nextProps.match.params.topic || !this.props.categories.length)
                return true;
        }
        
        // if (this.props.cover !== nextProps.cover)
        //     return true;
        if (nextProps.topic !== this.props.topic)
            return true;
        
        return false;
        
        
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
        topic: state.postDetailReducer.postDetail.category,
        cover: state.headerReducer.cover
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slide);