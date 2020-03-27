import React, { Component } from 'react';
import '../homeslide/Index.css';

class HomeSlide extends Component {
  render() {
    return (
      <div className="slide-wrapper container">
        <div className="slide-v2 p-t-100 row m-lr-auto flex flex-a-c">
          <div className="content-slide col-12 col">
            <div className="title-slide m-b-20">
              <h1 className="fs-50">Hi, </h1>
              <br />
              <h1 className="fs-50 m-t--15">I'm Linh</h1>
            </div>
            <div className="description-slide m-b-20">
              <p className="fs-25 lheight-30">Working as a web developer, i'm interested in <br />
                creating websites and extension tools.
          </p>
            </div>
            <div className="button-slide">
              <button className="button button-green m-r-20 m-b-30"><a href="/" className="link">Contact me</a></button>
              <button className="button button-no-color border-white"><a href="/" className="link fc-white">My
              products</a></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSlide;