import React, { Component } from 'react';
import '../rightbaritem/Index.css';

import Skeleton from 'react-loading-skeleton';

class RightBarItemSkeleton extends Component {

    render() {
        return (
            <div className="recent-post-detail flex flex-a-c m-b-25">
                <div>
                    <Skeleton width={100} height={100}/>
                </div>
                <div className="right-bar-item-text m-l-20 lh-15">
                    <p className="fs-18 fc-black a-hover-to-green">
                        <Skeleton/>
                    </p>
                    <p className="fc-2 fs-14"><Skeleton/></p>
                </div>
            </div>

        );
    }
}

export default RightBarItemSkeleton;