import React from 'react';

import ChallengeTeaser from '../ChallengeTeaser/ChallengeTeaser';
import LearnMoreTeaser from '../LearnMoreTeaser/LearnMoreTeaser';

import './Welcome.scss';

class Welcome extends React.Component {
  render() {
    return (
      <div className="Welcome">
        <h5>Welcome component</h5>
        <ChallengeTeaser />
        <LearnMoreTeaser />
      </div>
    );
  }
}

export default Welcome;
