import React, { useEffect } from 'react';

const Comment = props => {
    useEffect(() => {
        if (window.FB)
            window.FB.XFBML.parse();
      });

    return (
        <div className="p-tb-10">
            <div className="fb-comments" data-href={props.location} data-width="100%" data-numposts="5"></div>
        </div>
    );
};



export default Comment;