import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../components/pages/Auth/Auth';
import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import Welcome from '../components/pages/Welcome/Welcome';
import Challenge from '../components/pages/Challenge/Challenge';
import LearnMore from '../components/pages/LearnMore/LearnMore';
import MyTrash from '../components/pages/MyTrash/MyTrash';
import CreateNewTrash from '../components/pages/CreateNewTrash/CreateNewTrash';
import UpdateTrash from '../components/pages/UpdateTrash/UpdateTrash';
import RandomTrashFacts from '../components/pages/RandomTrashFacts/RandomTrashFacts';
import Footer from '../components/shared/Footer/Footer';

import './App.scss';

import fbConnection from '../helpers/data/connection';

fbConnection();

class App extends React.Component {
  state = {
    authenticated: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authenticated: true });
      } else {
        this.setState({ authenticated: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <MyNavbar />
        <Auth />
        <Welcome />
        <Challenge />
        <LearnMore />
        <MyTrash />
        <CreateNewTrash />
        <UpdateTrash />
        <RandomTrashFacts />
        <Footer />
      </div>
    );
  }
}

export default App;
