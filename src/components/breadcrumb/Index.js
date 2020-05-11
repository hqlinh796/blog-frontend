import React from 'react';
import {Link} from 'react-router-dom';

const BreadCrumb = () => {
    return (
        <div className="col col-sm-6 p-tb-30 flex flex-j-sb">
            <div>
                <Link to="/" className="fs-20 fc-black a-hover-to-green">
                    <i className="fas fa-home" />
                    &nbsp; Home </Link> >
                <Link to="/blog/tat-ca" className="fs-20 fc-black a-hover-to-green"> Blog </Link> >
            </div>
        </div>
    );
};

export default BreadCrumb;