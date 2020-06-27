import React from 'react';
import { Link } from 'react-router-dom';

import './ChallengeTeaser.scss';

class ChallengeTeaser extends React.Component {
  render() {
    return (
      <div className="ChallengeTeaser">
        <h5>Challenge Teaser</h5>
        <Link to="/7daychallenge" className="btn btn-light btn-sm text-muted">I'm Ready</Link>
      </div>
    );
  }
}

export default ChallengeTeaser;
