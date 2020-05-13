import React from 'react';
import { FacebookProvider, Like } from 'react-facebook';
import './index.css';

const LikeFacebook = (props) => {
    return (
        <FacebookProvider appId="577342806204805">
            <Like href={props.location} colorScheme="dark" showFaces share/>
        </FacebookProvider>
    );
};

export default LikeFacebook;