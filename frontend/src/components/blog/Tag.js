import React, { Component } from 'react';

class Tag extends Component {
    render() {
        return (
            <div className="blog-slide-bar-tag m-tb-50">
                <h1 className="f-bold fs-22 m-b-50">Tags</h1>
                <div className="dis-inline-block p-tb-5 p-lr-15">
                    <a href="/">project</a>
                </div>
                <div className="dis-inline-block p-tb-5 p-lr-15">
                    <a href="/">tips</a>
                </div>
                <div className="dis-inline-block p-tb-5 p-lr-15">
                    <a href="/">extension</a>
                </div>
                <div className="dis-inline-block p-tb-5 p-lr-15">
                    <a href="/">love</a>
                </div>
                <div className="dis-inline-block p-tb-5 p-lr-15">
                    <a href="/">music</a>
                </div>
                <div className="dis-inline-block p-tb-5 p-lr-15">
                    <a href="/">story</a>
                </div>
                <div className="dis-inline-block p-tb-5 p-lr-15">
                    <a href="/">football</a>
                </div>
                <div className="dis-inline-block p-tb-5 p-lr-15">
                    <a href="/">facebook</a>
                </div>
            </div>

        );
    }
}

export default Tag;