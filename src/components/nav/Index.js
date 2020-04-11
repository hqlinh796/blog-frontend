import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../nav/Index.css';
import logo from './logo.png'

class Nav extends Component {

    constructor(props) {
        console.log('da con');
        super(props);
        this.state = ({
            isShowFixNav: false,
            isShowCollapseNav: false
        })
    }

    showFixNav = isShow => {
            return (
                <div className="fix-main-nav fix-main-nav-show" style={{top: this.state.isShowFixNav ? '0' : '-80px'}}>
                    <div className="container">
                        <div className="row ">
                            <nav className="col col-lg-12">
                                <div className="main-nav flex flex-j-sb flex-a-c">
                                    <div className="logo">
                                        <div className="logo-img dis-inline-block">
                                            <img src={logo} alt="logo" />
                                        </div>
                                    </div>
                                    <div className="link-nav">
                                        <ul className="flex">
                                            <li><NavLink exact to="/" className="link fc-black link-white-hover">Home</NavLink></li>

                                            <li><NavLink to="/blog/tat-ca" className="link fc-black link-white-hover">Blogs</NavLink></li>

                                            <li><NavLink exact to="/contact" className="link fc-black link-white-hover">Contact</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            )
    } 

    handleToggleMenuClick = () => {
        this.setState({
            isShowCollapseNav: !this.state.isShowCollapseNav
        })
    }

    showCollapseNav = (isShow) => {
        if (isShow)
        return (
            <div className="main-nav-wrapper width-100 dis-show">
            <div className="container">
                <div className="row">
                    <nav className="col col-lg-12">
                        <div className="main-nav flex flex-j-sb flex-a-c">
                            <div className="logo">
                                <div className="logo-img dis-inline-block">
                                    <img src={logo} alt="logo" />
                                </div>
                            </div>
                            <div className="link-nav">
                                <ul className="flex">
                                    <li><NavLink exact to="/" className="link fc-white link-white-hover">Home</NavLink></li>
                                    <li><NavLink to="/blog/tat-ca" className="link fc-white link-white-hover">Blogs</NavLink></li>
                                    <li><NavLink exact to="/contact" className="link fc-white link-white-hover">Contact</NavLink></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        )

        return (
            <div className="main-nav-wrapper width-100">
            <div className="container">
                <div className="row">
                    <nav className="col col-lg-12">
                        <div className="main-nav flex flex-j-sb flex-a-c">
                            <div className="logo">
                                <div className="logo-img dis-inline-block">
                                    <img src={logo} alt="logo" />
                                </div>
                            </div>
                            <div className="link-nav">
                                <ul className="flex">
                                    <li><NavLink exact to="/" className="link fc-white link-white-hover">Home</NavLink></li>
                                    <li><NavLink to="/blog/tat-ca" className="link fc-white link-white-hover">Blogs</NavLink></li>
                                    <li><NavLink exact to="/contact" className="link fc-white link-white-hover">Contact</NavLink></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        )
    }

    handleWindowScroll = () => {
        if (window.scrollY > 130) {
            if (!this.state.isShowFixNav)
                this.setState({
                    isShowFixNav: true
                })
        } else {
            if (this.state.isShowFixNav)
                this.setState({
                    isShowFixNav: false
                })
        }
    }
        
    render() {
        
        return (
            <div>
                <div className="top-nav-wrapper width-100 flex flex-a-c">
                    <div className="container">
                        <div className="row">
                            <nav className="col col-lg-12">
                                <div className="top-nav flex flex-j-sb flex-a-c">
                                    <div className="left-top-nav fs-25">
                                        <a href="www.facebook.com/linhcuoi796" className="fc-white link-white-hover"><i className="fab fa-facebook m-r-5" /></a>
                                        <a href="www.github.com/linhcuoi796" className="fc-white link-white-hover"><i className="fab fa-github" /></a>
                                    </div>
                                    <div className="right-top-nav">
                                        <div className="email dis-inline-block">
                                            <i className="fas fa-envelope fc-1 m-r-5" />
                                            <span className="info-top-nav">hqlinh.cr@gmail.com</span>
                                        </div>
                                        <div className="phone dis-inline-block m-l-20">
                                            <i className="fas fa-phone-alt fc-1 m-r-5" />
                                            <span className="info-top-nav">0396 498 332</span>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="toggle-menu-wrapper p-lr-30">
                    <div className="flex flex-a-c">
                        <div className="logo col col-6">
                            <div className="logo-img2 dis-inline-block">
                                <img src={logo} alt="logo" />
                            </div>
                        </div>
                        <div className="toggle-menu-icon txt-right col col-6" onClick={this.handleToggleMenuClick}>
                            <i className="fas fa-bars fs-35" id="toggle-menu-icon" />
                        </div>
                    </div>
                </div>
               {this.showCollapseNav(this.state.isShowCollapseNav)}
                {this.showFixNav(this.state.isShowFixNav)}
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleWindowScroll);
        
    }
}

export default Nav;