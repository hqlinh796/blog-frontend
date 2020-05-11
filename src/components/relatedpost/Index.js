import React from 'react';
import Item from './Item.js';
import '../relatedpost/Index.css';

const RelatedPost = (props) => {
    
    const getRelatedPosts = relatedPosts => {
        return relatedPosts.map((relatedPost, i) => {
            return <Item relatedPost={relatedPost} key={i}/>
        })
    }

    
        return (
            <div className="pre-and-next-post-wrapper p-tb-40">
                <div>
                    <h3 className="m-tb-10 txt-center">YOU MIGHT ALSO LIKE</h3>
                    <div className="pre-and-next-post row p-t-10">
                        {getRelatedPosts(props.relatedPosts)}
                    </div>
                </div>
            </div>

        );
    
}

export default RelatedPost;