import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../nav/Index.css';

class Nav extends Component {
    render() {
        //console.log("render nav");
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
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Oikya_Front_Logo.png" alt="logo for web" />
                            </div>
                        </div>
                        <div className="toggle-menu-icon txt-right col col-6">
                            <i className="fas fa-bars fs-35" id="toggle-menu-icon" />
                        </div>
                    </div>
                </div>
                <div className="main-nav-wrapper width-100">
                    <div className="container">
                        <div className="row">
                            <nav className="col col-lg-12">
                                <div className="main-nav flex flex-j-sb flex-a-c">
                                    <div className="logo">
                                        <div className="logo-img dis-inline-block">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Oikya_Front_Logo.png" alt="logo for web" />
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
                <div className="fix-main-nav">
                    <div className="container">
                        <div className="row ">
                            <nav className="col col-lg-12">
                                <div className="main-nav flex flex-j-sb flex-a-c">
                                    <div className="logo">
                                        <div className="logo-img dis-inline-block">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Oikya_Front_Logo.png" alt="logo for web" />
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
            </div>
        );
    }
}

export default Nav;