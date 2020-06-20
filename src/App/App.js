import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Auth from '../components/pages/Auth/Auth';
import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import Welcome from '../components/pages/Welcome/Welcome';
// import Challenge from '../components/pages/Challenge/Challenge';
// import LearnMore from '../components/pages/LearnMore/LearnMore';
import MyTrash from '../components/pages/MyTrash/MyTrash';
import CreateNewTrash from '../components/pages/CreateNewTrash/CreateNewTrash';
import UpdateTrash from '../components/pages/UpdateTrash/UpdateTrash';
import RandomTrashFacts from '../components/pages/RandomTrashFacts/RandomTrashFacts';
import Footer from '../components/shared/Footer/Footer';

import './App.scss';

import fbConnection from '../helpers/data/connection';

fbConnection();

const PublicRoute = ({ component: Component, authenticated, ...rest }) => {
  const routeChecker = (props) => (authenticated === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/trackmytrash', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  const routeChecker = (props) => (authenticated === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

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
    const { authenticated } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar />
              <div className="container">
                <div className="row">
                  <Switch>
                    <PrivateRoute path='/trackmytrash' component={MyTrash} authenticated={authenticated} />
                    <PrivateRoute path='/createnewtrash' component={CreateNewTrash} authenticated={authenticated} />
                    <PrivateRoute path='/updatetrash/:trashId' component={UpdateTrash} authenticated={authenticated} />
                    <PrivateRoute path='/trashfacts' component={RandomTrashFacts} authenticated={authenticated} />

                    <PublicRoute path='/welcome' component={Welcome} authenticated={authenticated} />
                    {/* <PublicRoute path='/7daychallenge' component={Challenge} authenticated={authenticated} />
                    <PublicRoute path='/learnmore' component={LearnMore} authenticated={authenticated} /> */}
                    <PublicRoute path='/auth' component={Auth} authenticated={authenticated} />

                    <Redirect from="*" to="/welcome"/>
                  </Switch>
                </div>
              </div>
              <Footer />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
