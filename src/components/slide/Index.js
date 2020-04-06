import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../homeslide/Index.css';

import {setCover} from '../../actions/Header.Actions';

class Slide extends Component {
    
    

    getTitle = (title) => {
        if (title)
            return title;
        let topic = this.props.match.params.topic;
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
                            <h1 className="fs-40">{this.props.categories && this.getTitle(this.props.title)}</h1>
                        </div>
                    </div>
                </div>
        );
    }

  
}



const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setCover: (url) => {
            dispatch(setCover(url))
        }
    }
}

export default connect(mapDispatchToProps)(Slide);