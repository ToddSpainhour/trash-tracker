import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
    console.error('you just ran the logMeOut function');
  }

  render() {
    return (
      <div className="MyNavbar">
        <h5>MyNavbar</h5>
        <button className="btn btn-dark" onClick={this.logMeOut}>Logout</button>
      </div>
    );
  }
}

export default MyNavbar;
