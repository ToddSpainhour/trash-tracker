import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth col-md-4 offset-md-4 col-sm-12">
        <div className="auth-text-area col-md-12 col-sm-12">
          <h6 className="login-button-intro-text">Login to Get Started</h6>
            <button className="btn login-button" onClick={this.loginClickEvent}>Login</button>
              <div className="line-divider col-6 offset-3"></div>
        </div>
      </div>
    );
  }
}

export default Auth;
