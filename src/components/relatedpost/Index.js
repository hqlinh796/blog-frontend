import React, { Component } from 'react';
import Item from './Item.js';
import '../relatedpost/Index.css';

class RelatedPost extends Component {
    
    getRelatedPosts = relatedPosts => {
        return relatedPosts.map((relatedPost, i) => {
            return <Item relatedPost={relatedPost} key={i}/>
        })
    }

    render() {
        return (
            <div className="pre-and-next-post-wrapper p-tb-40">
                <div>
                    <h3 className="m-tb-10">Related posts</h3>
                    <div className="pre-and-next-post row p-t-10">
                        {this.getRelatedPosts(this.props.relatedPosts)}
                    </div>
                </div>
            </div>

        );
    }
}

export default RelatedPost;