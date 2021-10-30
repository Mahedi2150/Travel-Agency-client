// import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';

import useAuth from './../../../hooks/useAuth';
import './Login.css'

const Login = () => {

    const { signInUsingGoogle, setUser, setError } = useAuth()



    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home'

    // google login
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                setError("");
                setUser(result.user)
                history.push(redirect_url)
            })
    }






    return (
        <div className="mx-auto w-50  p-5">
            <h2>Please Log in</h2>

            <div>----------------------------</div>
            <br />
            <button onClick={handleGoogleSignIn} type="button" className="btn btn-light">
                <img src="https://img.icons8.com/color/24/000000/google-logo.png" />
                google sign in</button>
        </div>
    );
};

export default Login;