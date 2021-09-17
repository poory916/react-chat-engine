import React from 'react';
import { GoogleOutlined , FacebookOutlined} from '@ant-design/icons';
import 'firebase/compat/app';


import { auth } from '../firebase';
import firebase from 'firebase/compat/app';


function Login () {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to unichat!</h2>
                <div className="login-button google"
                    onClick={()=> {auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}}
                >
                    <GoogleOutlined /> Login with google
                </div>
                <br/><br/>
                <div className="login-button facebook">
                    <FacebookOutlined /> Login with facebook
                </div>
            </div>
        </div>
    );
};

export default Login;