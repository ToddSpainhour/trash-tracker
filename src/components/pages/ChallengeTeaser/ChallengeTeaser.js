import React from 'react';
import { Link } from 'react-router-dom';

import imagePlaceholder from '../../../images/trash-can.svg';

import './ChallengeTeaser.scss';

class ChallengeTeaser extends React.Component {
  render() {
    return (
      <div className="ChallengeTeaser col-12">
        <div className="challengeTeaserTextArea col-md-8 col-sm-12">
          <h2 className="challenge-teaser-header">Take the 7 Day Trash Tracking Challenge</h2>
          <div className="line-divider col-6 offset-3"></div>
          <p className="challenge-teaser-text-body col-md-8 col-sm-12">Learn about your habits to make better decisions for the environment by logging what you toss out.</p>
          <div className="challenge-teaser-button">
          <Link to="/7daychallenge" className="btn btn-sm challenger-teaser-button">Read More</Link>
          </div>
        </div>
        <div className="challegeTeaserImage col-md-4 col-sm-12">
          <img src={ imagePlaceholder } alt="change this text"/>
        </div>
      </div>
    );
  }
}

export default ChallengeTeaser;
