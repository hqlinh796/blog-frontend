import React from 'react';
import './Index.css';

const ContentBlog = (props) => {
      
    
        const {content, tags} = props.postDetail;
        return (
            <div className="post-detail fs-18">
                <div className="p-b-30">
                    <div className="post-content lh-15">
                        <p>
                            {content}
                        </p>
                        <p>
                            {content}
                        </p>
                        <h3 className="dis-inline-block m-t-15 f-bold">Tags: &nbsp; </h3>
                        {tags && tags.map((tag, index) =>
                            <a href="##" className="fc-1" key={index}>#{tag} </a>
                        )}
                    </div>
                </div>
            </div>

        );
    
}

export default ContentBlog;