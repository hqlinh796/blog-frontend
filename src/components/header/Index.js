import React, { Component } from 'react';
import Nav from '../nav/Index';
import HeaderRoute from '../../routes/HeaderRoute';
import {connect} from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import {setCoverIsLoaded} from '../../actions/Header.Actions';
import './Index.css';

class Header extends Component {
    
    
    //style={{ backgroundImage: `url(${cover ? cover : ''})` }}
    
    render() {
        const {cover} = this.props;
        
            return (
                <header className="container-header-v2 fc-white" style={{ backgroundImage: `url(${cover})` }}>
                    <Nav />
                    <HeaderRoute />
                </header>
            )
        
    }
    
}

const mapStateToProps = (state, ownProps) => {
    return {
        cover: state.headerReducer.cover
    }
}


export default connect(mapStateToProps)(Header)