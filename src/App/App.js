import React from 'react';

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

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <MyNavbar />
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
