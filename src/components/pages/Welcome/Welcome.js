import React from 'react';

import Auth from '../Auth/Auth';
import ChallengeTeaser from '../ChallengeTeaser/ChallengeTeaser';
import LearnMoreTeaser from '../LearnMoreTeaser/LearnMoreTeaser';

import './Welcome.scss';

class Welcome extends React.Component {
  render() {
    return (
      <div className="Welcome col-12">
        <div className="header-area col-md-6 offset-md-3 col-sm-12 offset-sm-0">
          <h6 className="header-intro">Welcome to</h6>
          <h1 className="header">Trash Tracker</h1>
            <h6 className="tagline">Learn More about the Things We Choose to Forget</h6>
        </div>
        <Auth />
        <ChallengeTeaser />
        <LearnMoreTeaser />
      </div>
    );
  }
}

export default Welcome;
