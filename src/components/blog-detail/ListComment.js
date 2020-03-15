import React, { Component } from 'react';

import CommentData from '../../data/comments.json'
import CommentItem from './CommentItem.js';

class ListComment extends Component {

    getCommentItem = commentData => 
        commentData.map((singleComment, key) => 
            <CommentItem name={singleComment.name} rate={singleComment.rate} content={singleComment.content} date={singleComment.date} key={key}/>
        )

    render() {
        return (
            <div className="list-comment">
                <div className="total-comment f-bold fs-18 m-b-50">
                    {CommentData.length} comments
                    {this.getCommentItem(CommentData)}
                </div>      
            </div>

        );
    }
}

export default ListComment;