import React, { Component } from 'react';

class Footer extends Component {

    

    render() {

        return (
            <footer className="container-footer">
                <div className="top-footer-wrapper flex flex-a-c flex-j-c p-tb-100">
                    <div className="container">
                        <div className="top-footer row flex flex-j-sb">
                            <div className="col col-md-5 col-6">
                                <div>
                                    <div className="logo-img">
                                        <a href="index.html">
                                            <img src="img/logo.png" alt="" className="logo-img obj-cover" />
                                        </a>
                                    </div>
                                    <h2 className="fs-20 fc-white m-tb-40">
                                        Firmament morning sixth subdue darkness creeping gathered divide.
                                    </h2>
                                    <div className="icon-footer">
                                        <div className="circle flex flex-a-c flex-j-c float-l m-r-15">
                                            <i className="fc-white fab fa-facebook-f" />
                                        </div>
                                        <div className="circle flex flex-a-c flex-j-c">
                                            <i className="fc-white fab fa-instagram" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-md-2 col-6">
                                <div>
                                    <h2 className="fs-25 fc-white m-b-50 m-t-20">
                                        Services
                                    </h2>
                                    <ul>
                                        <li>
                                            <a className="link link-white-hover fc-white" href="/">Design</a>
                                        </li>
                                        <li>
                                            <a className="link link-white-hover fc-white" href="/">Development</a>
                                        </li>
                                        <li>
                                            <a className="link link-white-hover fc-white" href="/">Marketing</a>
                                        </li>
                                        <li>
                                            <a className="link link-white-hover fc-white" href="/">Consulting</a>
                                        </li>
                                        <li>
                                            <a className="link link-white-hover fc-white" href="/">Finance</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-md-2 col-6">
                                <div>
                                    <h2 className="fs-25 fc-white m-b-50 m-t-20">
                                        Useful Links
                                    </h2>
                                    <ul>
                                        <li>
                                            <a className="link link-white-hover fc-white" href="/">About</a>
                                        </li>
                                        <li>
                                            <a className="link link-white-hover fc-white" href="/">Blog</a>
                                        </li>
                                        <li>
                                            <a className="link link-white-hover fc-white" href="/">Contact</a>
                                        </li>
                                        <li>
                                            <a className="link link-white-hover fc-white" href="/">Free quote</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-md-3 col-6">
                                <div>
                                    <h2 className="fs-25 fc-white m-b-50 m-t-20">
                                        Address
                                    </h2>
                                    <ul className="fc-white">
                                        <li>
                                            200, D-block, Green lane USA
                                        </li>
                                        <li>
                                            +10 367 467 8934
                                        </li>
                                        <li>
                                            docmed@contact.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bot-footer-wrapper txt-center fs-15">
                    <span className="fc-white">
                        Copyright ©2020 All rights reserved | This template is made with
                        <i className="far fa-heart fs-13" /> by
                    </span>
                    <span className="fc-1">
                        Colorlib
                    </span>
                </div>
            </footer>
        );
    }
    componentDidMount(){
        // window.addEventListener('scroll', (e) => {
        //     const footer = document.getElementsByTagName('footer')[0];
        //     const positionToLoadMore = footer.offsetTop - window.innerHeight;
        //     if (window.scrollY >= positionToLoadMore){
        //         //loadmore
        //         //remove listener
        //     }
        // })
    }
}

export default Footer;