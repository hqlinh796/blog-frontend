import React, { Component } from 'react';

class ContentBlog extends Component {
      

    getFullDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = date.getDate(),
              month = date.getMonth() + 1,
              year = date.getFullYear();
        return day + '/' + month + '/' + year;
    }

    render() {
        return (
            <div className="post-detail fs-18">
                <img src={this.props.cover} alt="" className="post-cover-image" />
                <div className="p-lr-30 p-tb-40">
                    <h1 className="fs-25 f-bold">{this.props.title}
                    </h1>
                    <div className="date-and-topic fs-14 m-t-20">
                        <span className="date-post-detail">{this.getFullDate(this.props.date)}</span>
                        <span>&nbsp; | &nbsp;</span>
                        <span className="topic-post-detail">{this.props.category}</span>
                    </div>
                    <div className="cre-post fs-14">
                        <i className="fas fa-book-reader m-r-5 m-t-10 m-b-20"></i>
                        <span className="">{this.props.author}</span>
                    </div>
                    <div className="post-content fc-2 lh-15">
                        {this.props.content}
                    </div>
                </div>
            </div>

        );
    }
}

export default ContentBlog;