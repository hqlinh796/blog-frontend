import React, { Component } from 'react';
import Nav from '../nav/Index';
import HeaderRoute from '../../routes/HeaderRoute';
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
}

export default Header;