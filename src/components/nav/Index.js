import React, { Component } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import '../nav/Index.css';
import logo from './logo.png'
import { useState } from 'react';
import { useEffect } from 'react';


const Nav = (props) => {
    const history = useHistory();
    useEffect(() => {
        window.addEventListener('scroll', handleWindowScroll);
    }, [])

    const [isShowFixNav, setShowFixNav] = useState(false);
    const [isShowCollapseNav, setShowCollapseNav] = useState(false);
    const [isShowModal, setShowModal] = useState(false);
    const [keyword, setKeyword] = useState('');

    const FixNav = isShow => {
        return (
            <div className="fix-main-nav fix-main-nav-show" style={{ top: isShowFixNav ? '0' : '-80px' }}>
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
                                        <li><span onClick={(e) => clickSearch(e)}><i className="fas fa-search link fc-black link-white-hover" /></span></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }

    const handleToggleMenuClick = () => {
        setShowCollapseNav(!isShowCollapseNav);
    }

    const CollapseNav = (isShow) => {
        const opacity = isShow ? '1' : '0';
            return (
                <div className="main-nav-wrapper width-100" style={{opacity: `${opacity}`}}>
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
                                            <li><NavLink exact to="/" className="link fc-black link-white-hover">Home</NavLink></li>
                                            <li><NavLink to="/blog/tat-ca" className="link fc-black link-white-hover">Blogs</NavLink></li>
                                            <li><NavLink exact to="/contact" className="link fc-black link-white-hover">Contact</NavLink></li>
                                            <li><span onClick={() => clickSearch()} style={{ cursor: 'pointer' }}><i className="fas fa-search link fc-black link-white-hover" /></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            )
    }

    const handleWindowScroll = () => {
        if (window.scrollY > 130) {
            
                setShowFixNav(true);
        } else {
                setShowFixNav(false);
        }
    }

    const clickSearch = () => {
        setShowModal(true);
    }

    const disappearModal = () => setShowModal(false);

    const handleInputSubmit = (e) => {
        e.preventDefault();
        history.push(`/blog/search?keyword=${keyword}`);
        disappearModal();
    }

    const handleOnChangeInput = (e) => {
        setKeyword(e.target.value);
    }

    const Modal = () => {
        if (isShowModal)
            return (
                <div id="search-modal" >
                    <form onSubmit={handleInputSubmit}>
                        <input type="text" placeholder="Type keyword . . . " autoFocus
                            value={keyword}
                            onBlur={disappearModal}
                            onChange={handleOnChangeInput}
                        />
                    </form>
                </div>
            )
        return (
            <div id="search-modal" style={{ opacity: '0', zIndex: '-100' }}>
            </div>
        )
    }


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
                                        <i className="fas fa-envelope fc-white m-r-5" />
                                        <span className="info-top-nav fc-white">hqlinh.cr@gmail.com</span>
                                    </div>
                                    <div className="phone dis-inline-block m-l-20">
                                        <i className="fas fa-phone-alt fc-white m-r-5" />
                                        <span className="info-top-nav fc-white">0396 498 332</span>
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
                    <div className="toggle-menu-icon txt-right col col-6" onClick={handleToggleMenuClick}>
                        <i className="fas fa-bars fs-30" id="toggle-menu-icon" />
                    </div>
                </div>
            </div>
            {CollapseNav(isShowCollapseNav)}
            {FixNav(isShowFixNav)}
            {Modal()}
        </div>
    );
}

export default Nav;