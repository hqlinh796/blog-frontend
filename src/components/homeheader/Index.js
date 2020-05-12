import React from 'react';
import Nav from '../nav/Index';
import HomeSlide from '../homeslide/Index';
import './Index.css';


const HomeHeader = (props) => {

    // useEffect(() => {
    //     const header = document.getElementsByClassName('container-header-v2')[0];
    //     const src = props.src;
    //     const img = document.createElement('img');
    //     img.src = src;
    //     img.addEventListener('load', () => {
    //         header.style.backgroundImage = `url(${src})`;
    //         props.hideLoadingBar();
    //     })
    // })

    
    const height = window.innerHeight;
    

    return (
        <header className="container-header-v2 fc-white" style={{height: height}}>
            {/* <LoadingBar style={{ backgroundColor: '#28AE60', height: '7px', position: 'fixed', top: '0', zIndex: '100000' }} /> */}
            <Nav color={props.color}/>
            <HomeSlide />
        </header>
    )
}




export default HomeHeader;