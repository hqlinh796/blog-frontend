import React, { useEffect, Fragment } from 'react';
import {connect} from 'react-redux';
import Messenger from '../../components/messenger/Index';
import Footer from '../../components/footer/Index';
import BackToTop from '../../components/backtotop/Index';
import HomeHeader from '../../components/homeheader/Index';
//import LoadingBar, {hideLoading} from 'react-redux-loading-bar';
import {setCover} from '../../actions/Header.Actions';
import './Index.css';

const Home = (props) => {

    useEffect(() => {
        props.setCover('https://image.freepik.com/free-photo/composition-fresh-orange-juice-with-yellow-background_23-2148037173.jpg');
        document.title = 'Home - Linhtinh';
    }, [])
    
        return (
            <Fragment>
                <HomeHeader 
                src={props.cover}
                hideLoadingBar={props.hideLoadingBar}/>
                <Messenger />
                <section className="container-main-content">
                    {/*CONTENT 1*/}
                    <div className="content1-wrapper container m-tb-100">
                        <div className="row content1 m-b-50">
                            <h2 className="title-content txt-center fs-40 col-12">Explore Our Solutions</h2>
                        </div>
                        <div className="row">
                            <div className="col col-lg-4 col-md-6 col-12 m-b-30">
                                <div className="service-bg-1 service-bg">
                                    <div className="bg-blur flex flex-a-c flex-j-c">
                                        <div className="service-img-wrapper txt-center">
                                            <div className="img-service m-b-20 m-lr-auto">
                                                <img src="img/calendar.png" alt="" className="dis-block obj-cover width-100" />
                                            </div>
                                            <h3 className="title-service fc-white fs-25">Time</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-4 col-md-6 col-12 m-b-30">
                                <div className="service-bg-2 service-bg">
                                    <div className="bg-blur flex flex-a-c flex-j-c">
                                        <div className="service-img-wrapper txt-center">
                                            <div className="img-service m-b-20 m-lr-auto">
                                                <img src="img/creative.png" alt="" className="dis-block obj-cover width-100" />
                                            </div>
                                            <h3 className="title-service fc-white fs-25">Creative</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-4 col-md-6 col-12">
                                <div className="service-bg-3 service-bg">
                                    <div className="bg-blur flex flex-a-c flex-j-c">
                                        <div className="service-img-wrapper txt-center">
                                            <div className="img-service m-b-20 m-lr-auto">
                                                <img src="img/teamwork.png" alt="" className="dis-block obj-cover width-100" />
                                            </div>
                                            <h3 className="title-service fc-white fs-25">Teamwork</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*CONTENT 2*/}
                    <div className="content2-wrapper container">
                        <div className="row content2 flex flex-j-c">
                            <div className="col col-lg-6 col-12 img-content2 m-b-30">
                                <img src="img/background-slide.jpg" alt="" className="obj-cover" />
                            </div>
                            <div className="col col-lg-6 col-12 txt-content2 flex flex-a-c">
                                <div className="txt-content2-wrapper">
                                    <h2 className="title-content fs-40 m-b-50">The Largest Business Expert</h2>
                                    <p className="lh-30 fs-20 m-b-40 fc-2">These cases are perfectly simple and easy to distinguish. In
                                      a free hour,
                                      when our power of choice is untrammelled and when nothing prevents
            our being able to do what we like best.</p>
                                    <div className="list fs-20 lh-30 m-b-50 fc-2">
                                        <p><i className="far fa-check-circle fc-1 fs-17 m-r-25" />Apartments frequently or motionless.
            </p>
                                        <p><i className="far fa-check-circle fc-1 fs-17 m-r-25" />Duis aute irure dolor in
              reprehenderit in voluptate.</p>
                                        <p><i className="far fa-check-circle fc-1 fs-17 m-r-25" />Voluptatem quia voluptas sit
              aspernatur.</p>
                                    </div>
                                    <button className="button button-green"><a href="/" className="link">About me</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*CONTENT 3*/}
                    <div className="content3-wrapper m-t-50">
                        <div className="container">
                            <div className="row content3 flex flex-j-sb">
                                <div className="col col-md-4 txt-center m-b-30">
                                    <h1 className="fs-45 fc-black m-b-20">520+</h1>
                                    <h2 className="fc-2 fs-20">Total projects</h2>
                                </div>
                                <div className="col col-md-4 txt-center m-b-30">
                                    <h1 className="fs-45 fc-black m-b-20">520+</h1>
                                    <h2 className="fc-2 fs-20">Total projects</h2>
                                </div>
                                <div className="col col-md-4 txt-center">
                                    <h1 className="fs-45 fc-black m-b-20">520+</h1>
                                    <h2 className="fc-2 fs-20">Total projects</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*CONTENT 4*/}
                    <div className="content4-wrapper container">
                        <div className="content4 row flex flex-j-c">
                            <h2 className="title-content txt-center m-b-30 col-12">
                                Our Recent Works
                        </h2>
                            <p className="fc-2 txt-center dis-block m-b-30 fs-20 fc-2">
                                These cases are perfectly simple and easy to distinguish. In a free<br />
                                hour, when our power of choice is untrammelled.
                        </p>
                            <div className="img-content4 row flex flex-j-sb">
                                <div className="img-content4-wrapper col col-lg-4 col-12 m-b-30">
                                    <div className="pos-rel">
                                        <img src="img/background-slide.jpg" alt="" className="obj-cover width-100" />
                                        <div className="content4-hover pos-abs flex flex-a-c flex-j-c">
                                            <div>
                                                <h1 className="fc-white fs-30 txt-center">Product branding</h1>
                                                <h2 className="fc-white fs-25 txt-center">Branding</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-content4-wrapper col col-lg-4 col-12 m-b-30">
                                    <div className="pos-rel">
                                        <img src="img/background-slide.jpg" alt="" className="obj-cover width-100" />
                                        <div className="content4-hover pos-abs flex flex-a-c flex-j-c">
                                            <div>
                                                <h1 className="fc-white fs-30 txt-center">Product branding</h1>
                                                <h2 className="fc-white fs-25 txt-center">Branding</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-content4-wrapper col col-lg-4 col-12 m-b-30">
                                    <div className="pos-rel">
                                        <img src="img/background-slide.jpg" alt="" className="obj-cover width-100" />
                                        <div className="content4-hover pos-abs flex flex-a-c flex-j-c">
                                            <div>
                                                <h1 className="fc-white fs-30 txt-center">Product branding</h1>
                                                <h2 className="fc-white fs-25 txt-center">Branding</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="img-content4 row flex flex-j-sb">
                                <div className="img-content4-wrapper col col-lg-8 col-12 m-b-30">
                                    <div className="pos-rel">
                                        <img src="img/background-slide.jpg" alt="" className="obj-cover width-100" />
                                        <div className="content4-hover pos-abs flex flex-a-c flex-j-c">
                                            <div>
                                                <h1 className="fc-white fs-30 txt-center">Product branding</h1>
                                                <h2 className="fc-white fs-25 txt-center">Branding</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-content4-wrapper col col-lg-4 col-12">
                                    <div className="pos-rel">
                                        <img src="img/background-slide.jpg" alt="" className="obj-cover width-100" />
                                        <div className="content4-hover pos-abs flex flex-a-c flex-j-c">
                                            <div>
                                                <h1 className="fc-white fs-30 txt-center">Product branding</h1>
                                                <h2 className="fc-white fs-25 txt-center">Branding</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="button button-no-color m-lr-auto dis-block m-t-80 border-green"><a href="/" className="link fc-1">More works</a></button>
                        </div>
                    </div>
                    {/*CONTENT 5*/}
                    <div className="content5-wrapper m-b-50">
                        <div className="container">
                            <div className="content5 row flex flex-j-c">
                                <div className="col col-lg-4 col-md-6 col-12 fc-white txt-center m-b-30">
                                    <div className="border-white bg-green p-tb-40">
                                        <img src="img/calendar.png" alt="" className="obj-cover" />
                                        <h1 className="m-tb-25 fs-25">ABC</h1>
                                        <h2 className="lh-17 fs-20">These cases are perfectly<br />simple and easy to</h2>
                                    </div>
                                </div>
                                <div className="col col-lg-4 col-md-6 col-12 fc-white txt-center m-b-30">
                                    <div className="border-white bg-green p-tb-40">
                                        <img src="img/calendar.png" alt="" className="obj-cover" />
                                        <h1 className="m-tb-25 fs-25">ABC</h1>
                                        <h2 className="lh-17 fs-20">These cases are perfectly<br />simple and easy to</h2>
                                    </div>
                                </div>
                                <div className="col col-lg-4 col-md-6 col-12 fc-white txt-center">
                                    <div className="border-white bg-green p-tb-40">
                                        <img src="img/calendar.png" alt="" className="obj-cover" />
                                        <h1 className="m-tb-25 fs-25">ABC</h1>
                                        <h2 className="lh-17 fs-20">These cases are perfectly<br />simple and easy to</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*CONTENT 6*/}
                    <div className="content6-wrapper container">
                        <div className="content6 row">
                            <div className="col col-md-6 col-12 flex flex-a-c m-b-30">
                                <div className="flex flex-a-s flex-d-c width-100 p-tb-30">
                                    <div className="content6-content">
                                        <div className="width-100">
                                            <div className="active" id="first-content6-content">
                                                <h1 className="title-content">Give you the best financial solution for busniness</h1>
                                                <p className="fs-20 fc-2 m-tb-30 lh-16">These cases are perfectly simple and easy to
                                                  distinguish.
                                                  In a free hour, when our power of choice is untrammelled and when
                                                  nothing prevents our being able to do what we like best.
                </p>
                                            </div>
                                            <div>
                                                <h1 className="title-content">Title 2</h1>
                                                <p className="fs-20 fc-2 m-tb-30 lh-16">These cases are perfectly simple and easy to
                                                  distinguish.
                                                  In a free hour, when our power of choice is untrammelled and when
                                                  nothing prevents our being able to do what we like best.
                                            </p>
                                            </div>
                                            <div>
                                                <h1 className="title-content">Title 3</h1>
                                                <p className="fs-20 fc-2 m-tb-30 lh-16">These cases are perfectly simple and easy to
                                                  distinguish.
                                                  In a free hour, when our power of choice is untrammelled and when
                                                  nothing prevents our being able to do what we like best.
                </p>
                                            </div>
                                            <div id="last-content6-content">
                                                <h1 className="title-content">Title 4</h1>
                                                <p className="fs-20 fc-2 m-tb-30 lh-16">These cases are perfectly simple and easy to
                                                  distinguish.
                                                  In a free hour, when our power of choice is untrammelled and when
                                                  nothing prevents our being able to do what we like best.
                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="arrow-wrapper flex">
                                        <div className="arrow-pre circle border-green flex flex-a-c flex-j-c m-r-20">
                                            <i className="fas fs-10 fa-chevron-left fc-1" />
                                        </div>
                                        <div className="arrow-next circle border-green flex flex-a-c flex-j-c">
                                            <i className="fas fs-10 fa-chevron-right fc-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-md-6 col-12 flex flex-a-c">
                                <div>
                                    <img src="img/bg2.jpg" alt="" className="obj-cover width-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*CONTENT 7*/}
                    <div className="content7-wrapper flex flex-a-c flex-j-c">
                        <div className="container">
                            <div className="content7 row p-tb-100 txt-center">
                                <div className="img-content7 col-12 flex flex-j-c">
                                    <img src="img/bg2.jpg" alt="" className="circle avatar-content7 obj-cover img-selected" id="first-content7-img" />
                                    <img src="img/bg2.jpg" alt="" className="circle avatar-content7 obj-cover m-lr-30" id="second-content7-img" />
                                    <img src="img/bg2.jpg" alt="" className="circle avatar-content7 obj-cover" id="third-content7-img" />
                                </div>
                                <div className="content7-content-wrapper">
                                    <div className="content7-content flex">
                                        <div className="content7-content-active  txt-center" id="first-content7-content">
                                            <h1 className="m-tb-50 fs-30 fc-2">
                                                "These cases are perfectly simple and easy to distinguish. In a free hour,
                                                when our power of choice is untrammelled and when nothing prevents our being able."
              </h1>
                                            <h2 className="fs-20 m-b-25">ROBERT JOSON</h2>
                                            <h3 className="fc-2">Business Owner</h3>
                                        </div>
                                        <div className=" txt-center">
                                            <h1 className="m-tb-50 fs-30 fc-2" id="second-content7-content">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae
                                                fugit ea debitis dicta? Reiciendis corrupti sunt consectetur minus,
                                                doloribus voluptatum nemo animi, beatae velit quo soluta eos magnam unde!
              </h1>
                                            <h2 className="col-12 fs-20 m-b-25">ROBERT JOSON</h2>
                                            <h3 className="col-12 fc-2">Business Owner</h3>
                                        </div>
                                        <div>
                                            <h1 className="m-tb-50 fs-30 fc-2" id="third-content7-content">
                                                "title 3"
              </h1>
                                            <h2 className="col-12 fs-20 m-b-25">ROBERT JOSON</h2>
                                            <h3 className="col-12 fc-2">Business Owner</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*CONTENT 8*/}
                    <div className="content8-wrapper flex flex-a-c flex-j-c p-tb-100">
                        <div className="content8 txt-center">
                            <h1 className="fs-40 fc-white">
                                Do you have any project?
      </h1>
                            <p className="fs-20 fc-white m-tb-50 lh-17">
                                Nam libero tempore, cum soluta nobis est eligendi optio<br />
                                cumque nihil impedit quo minus.
      </p>
                            <button className="button button-no-color fc-white button2">
                                Contact us
      </button>
                        </div>
                    </div>
                </section>

                <Footer />
                <BackToTop />
            </Fragment>
        );
}

const mapStateToProps = (state, ownProps) => {
    return {
        cover: state.headerReducer.cover
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // hideLoadingBar: () => {
        //     dispatch(hideLoading())
        // },
        setCover: (url) => {
            dispatch(setCover(url))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)