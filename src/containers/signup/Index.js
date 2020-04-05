import React from 'react';
import {Link} from 'react-router-dom';
import './Index.css';

const Signup = props => {
    return (
        <div className="container-fluid signup-wrapper">
            <div className="row flex-j-c">
                <div className="col-lg-4 col-sm-6 col-md-8 col-10">
                    <Link to="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Oikya_Front_Logo.png" alt="logo" />
                    </Link>
                    <h4 className="m-tb-15 fs-25 f-bold">Sign up</h4>
                    <form>
                        <input type="email" placeholder="Email" required/>
                        <input type="password" placeholder="Password" required minLength="8"/>
                        <input type="password" placeholder="Confirm password" required minLength="8"/>
                        <input type="text" placeholder="Name" required/>
                        <button className="button button-green">Sign up</button>
                    </form>
                    <div className="flex flex-j-c fs-14">
                        <span className="fc-2">Already have an account? &nbsp; </span>
                        <Link to="/login" className="fc-1"> Login here</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Signup;