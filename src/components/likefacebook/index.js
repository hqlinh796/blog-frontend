import React from 'react';
import { FacebookProvider, Like } from 'react-facebook';
import './index.css';

const LikeFacebook = (props) => {
    return (
        <FacebookProvider appId="294273318235338">
            <Like href={props.location} colorScheme="dark" showFaces share/>
        </FacebookProvider>
    );
};

export default LikeFacebook;