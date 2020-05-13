import React from 'react';
import { FacebookProvider, ShareButton } from 'react-facebook';
import './index.css';

const ShareFacebook = (props) => {
    return (
        <FacebookProvider appId="577342806204805">
            <ShareButton href={props.location} className="fc-white share-facebook-button">
                <i className="fas fa-share"></i>
                &nbsp; Share
            </ShareButton>
        </FacebookProvider>
    );
};

export default ShareFacebook;