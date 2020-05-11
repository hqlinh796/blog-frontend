import React, { useEffect } from 'react';
import Nav from '../nav/Index';
import HomeSlide from '../homeslide/Index';
import LoadingBar from 'react-redux-loading-bar';
import './Index.css';


const HomeHeader = (props) => {

    useEffect(() => {
        const header = document.getElementsByClassName('container-header-v2')[0];
        const src = props.src;
        const img = document.createElement('img');
        img.src = src;
        img.addEventListener('load', () => {
            header.style.backgroundImage = `url(${src})`;
            props.hideLoadingBar();
        })
    })

    return (
        <header className="container-header-v2 fc-white" >
            <LoadingBar style={{ backgroundColor: '#28AE60', height: '7px', position: 'fixed', top: '0', zIndex: '100000' }} />
            <Nav />
            <HomeSlide />
        </header>
    )
}




export default HomeHeader;