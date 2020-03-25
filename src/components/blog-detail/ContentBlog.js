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
        const {cover, title, date, category, author, content} = this.props.postDetail;
        return (
            <div className="post-detail fs-18">
                <img src={cover} alt="" className="post-cover-image" />
                <div className="p-lr-30 p-tb-40">
                    <h1 className="fs-25 f-bold">{title}
                    </h1>
                    <div className="date-and-topic fs-14 m-t-20">
                        <span className="date-post-detail">{this.getFullDate(date)}</span>
                        <span>&nbsp; | &nbsp;</span>
                        <span className="topic-post-detail">{category}</span>
                    </div>
                    <div className="cre-post fs-14">
                        <i className="fas fa-book-reader m-r-5 m-t-10 m-b-20"></i>
                        <span className="">{author}</span>
                    </div>
                    <div className="post-content fc-2 lh-15">
                        {content}
                    </div>
                </div>
            </div>

        );
    }
}

export default ContentBlog;