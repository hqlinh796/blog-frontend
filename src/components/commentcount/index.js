import React from 'react';
import { FacebookProvider, CommentsCount } from 'react-facebook';
 
const CommentCount = (props) => {

    return (
        <FacebookProvider appId="367756390407097" className="dis-inline-block">
            <CommentsCount href={props.location} />
        </FacebookProvider>
    );
}

export default CommentCount;