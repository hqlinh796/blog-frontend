import React, { Component } from 'react';
import Nav from './Nav';
import HeaderRoute from '../../routes/HeaderRoute';


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