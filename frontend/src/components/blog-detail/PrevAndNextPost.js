import React, { Component } from 'react';
import PrevPostItem from './PrevPostItem';
import NextPostItem from './NextPostItem';


import PrevAndNextPostData from '../../data/prevandnextpost.json'


class PrevAndNextPost extends Component {
    getPrevPostItem = PrevAndNextPostData => {
        const prevPost = PrevAndNextPostData.filter(singlePost => singlePost.isPrev)[0];
        return <PrevPostItem title={prevPost.title} id={prevPost.id} thumbnail={prevPost.cover}/>
    }
        

    getNextPostItem = PrevAndNextPostData => {
        const nextPost = PrevAndNextPostData.filter((singlePost) => !singlePost.isPrev)[0];
        return <NextPostItem title={nextPost.title} id={nextPost.id} thumbnail={nextPost.cover}/>
    }


    render() {
        return (
            <div className="pre-and-next-post-wrapper p-lr-30 p-tb-40">
                <div>
                    <div className="share-post">
                        <span>Share</span>
                        <i className="fab fa-facebook-square m-l-20" aria-hidden="true" />
                    </div>
                    <div className="pre-and-next-post row p-t-40">
                        {this.getPrevPostItem(PrevAndNextPostData)}
                        {this.getNextPostItem(PrevAndNextPostData)}
                    </div>
                </div>
            </div>

        );
    }
}

export default PrevAndNextPost;