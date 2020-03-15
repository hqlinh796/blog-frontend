import React, { Component } from 'react';

class CommentItem extends Component {

    getFullDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = date.getDate(),
              month = date.getMonth() + 1,
              year = date.getFullYear();
        return day + '/' + month + '/' + year;
    }

    render() {
        return (
            <div className="comment-detail flex m-tb-30">
                <img src="https://via.placeholder.com/150" alt="" className="avatar-comment" />
                <div className="text-comment-detail">
                    <h1 className="f-bold">{this.props.name}</h1>
                    <div className="rate-comment m-tb-10">
                        <i className="fas fa-star fc-1" />
                        &nbsp;
                        <span>{this.props.rate}</span>
                    </div>
                    <p className="fc-2 lh-12 f-normal">
                        {this.props.content}
                    </p>
                    <h6 className="fc-2 fs-12 m-t-10 f-normal">{this.getFullDate(this.props.date)}</h6>
                </div>
            </div>

        );
    }
}

export default CommentItem;