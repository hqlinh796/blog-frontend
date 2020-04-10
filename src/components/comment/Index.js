import React, { useEffect } from 'react';
import { FacebookProvider, Comments } from 'react-facebook';

const Comment = props => {
    useEffect(() => {
        // if (window.FB)
        //     window.FB.XFBML.parse();
      });

    return (
        // <div className="p-tb-10">
        //     {/* <div className="fb-comments" data-href={props.location} data-width="100%" data-numposts="5"></div> */}
        // </div>
        <FacebookProvider appId="577342806204805" className="p-tb-10">
            <Comments href={props.location} />
      </FacebookProvider>
    );
};



export default Comment;