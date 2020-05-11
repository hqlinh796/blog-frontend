import React, { Component } from 'react';
import Nav from '../nav/Index';
import Slide from '../slide/Index';
import {connect} from 'react-redux';


import LoadingBar, {hideLoading} from 'react-redux-loading-bar';
import './Index.css';

class Header extends Component {
    
    
    
    
    render() {
        const {cover} = this.props;
        
            return (
                <header className="container-header-v2 fc-white" >
                    <LoadingBar style={{backgroundColor: '#28AE60', height: '7px', position: 'fixed', top: '0', zIndex: '100000'}}/>
                    <Nav />
                    <Slide />
                </header>
            )
    }

    componentDidUpdate() {
        
        const header = document.getElementsByClassName('container-header-v2')[0];
        const imgURL = this.props.cover;
        const img = document.createElement('img');
        img.src = imgURL;
        img.addEventListener('load', () => {
            header.style.backgroundImage = `url(${imgURL})`;
            this.props.hideLoadingBar();
            //img.remove();
        })
    }
    
}

const mapStateToProps = (state, ownProps) => {
    return {
        cover: state.headerReducer.cover
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hideLoadingBar: () => {
            dispatch(hideLoading())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)