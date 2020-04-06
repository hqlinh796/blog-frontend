import React, { Component } from 'react';
import Nav from '../nav/Index';
import HeaderRoute from '../../routes/HeaderRoute';
import {connect} from 'react-redux';
import './Index.css';

class Header extends Component {
    render() {
        return (
            <header className="container-header-v2 fc-white">
                <Nav/>
                <HeaderRoute/>
            </header>
        );
    }

    componentDidMount(){
        console.log('match: ' + this.props.match);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        category: state.rightbarReducer.categories
    }
}

export default connect(mapStateToProps)(Header)