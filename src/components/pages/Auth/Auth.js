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
      <div className="Auth">
        <h5>Auth Component</h5>
        <button className="btn btn-dark" onClick={this.loginClickEvent}>Login with Your Google Account</button>
      </div>
    );
  }
}

export default Auth;
