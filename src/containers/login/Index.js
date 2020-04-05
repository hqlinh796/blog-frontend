import React from 'react';
import {Link} from 'react-router-dom';

import './Index.css';

const Login = props => {
    return (
        <div className="container-fluid login-wrapper">
            <div className="row flex-j-c">
                <div className="col-lg-4 col-sm-8 col-10">
                    <Link to="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Oikya_Front_Logo.png" alt="logo" />
                    </Link>
                    <h4 className="m-tb-15 fs-25 f-bold">Login</h4>
                    <form>
                        <input type="text" placeholder="Username"/>
                        <input type="text" placeholder="Password"/>
                        <button className="button button-green">Login</button>
                    </form>
                    <div className="flex flex-j-sb">
                        <Link className="fc-1">Forgot password</Link>
                        <Link to="/signup" className="fc-1">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Login;