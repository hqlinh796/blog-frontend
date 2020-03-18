import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

class TopAndRecentPostSkeleton extends Component {

    render() {
        return (
            <div className="recent-post-detail flex flex-a-c m-b-25">
                <div>
                    <Skeleton width={100} height={100}/>
                </div>
                <div className="recent-post-detail-text m-l-20 lh-15">
                    <a className="fs-18 fc-black a-hover-to-green">
                        <Skeleton/>
                    </a>
                    <p className="fc-2 fs-14"><Skeleton/></p>
                </div>
            </div>

        );
    }
}

export default TopAndRecentPostSkeleton;