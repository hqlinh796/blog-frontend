import React, { Component } from 'react';

import CommentItem from './CommentItem.js/index.js';

class ListComment extends Component {

    getCommentItem = commentData => {
        if (commentData.length > 0) {
            return commentData.map((singleComment, key) => 
            <CommentItem name={singleComment.name} rate={singleComment.rate} content={singleComment.content} date={singleComment.date} key={key}/>
        )
        }
    }

    render() {
        return (
            <div className="list-comment">
                <div className="total-comment f-bold fs-18 m-b-50">
                    {this.props.comments.length || 0} comments
                    {this.getCommentItem(this.props.comments)}
                </div>      
            </div>

        );
    }
}

export default ListComment;