import React from 'react';
import { Link } from 'react-router-dom';

import imagePlaceholder from '../../../images/trash-can.svg';

import './ChallengeTeaser.scss';

class ChallengeTeaser extends React.Component {
  render() {
    return (
      <div className="ChallengeTeaser col-12">
        <div className="challengeTeaserTextArea col-md-8 col-sm-12">
          <h2>Take the 7 Day Trash Tracking Challenge</h2>
          <h6>If you don't track it, you can't manage it! Learn about your habits to make better decision.</h6>
          <Link to="/7daychallenge" className="btn btn-light btn-sm text-muted">I'm Ready</Link>
        </div>
        <div className="challegeTeaserImage col-md-4 col-sm-12">
          <img src={ imagePlaceholder } alt="change this text"/>
        </div>
      </div>
    );
  }
}

export default ChallengeTeaser;
