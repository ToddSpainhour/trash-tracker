import React from 'react';

import Auth from '../Auth/Auth';

import recycleGraphic from '../../../images/recycle-logo.svg';
import trashTrackerCards from '../../../images/trash-tracker-cards.JPG';
import './Challenge.scss';

class Challenge extends React.Component {
  render() {
    return (
      <div className="Challenge col-12">
          <h1 className="page-header">Up For A Challenge?</h1>
          {/* <p>Don't worry! This challenge is easy. All you need to do is track what you throw away or recycle for seven days.
            This is a great peek into just how must we throw in the trash can.
          </p> */}
          <div>
            <h3 className="section-title">Track Your Trash for Seven Days</h3>
            <p>How much trash do you produce in a week? With Trash Tracker it's easy to find out. All you need to do is log in with your Google account,
              and start adding these items that are easy to forget.
              Trash Tracker has a way of putting things into perspective. If all that trash comes from me in a week, how much do I produce in a year?
              What about everyone in the city? The state? The country?</p>
            <img src= { trashTrackerCards } className="trash-tracker-cards-img" alt="tracked trash cards"></img>
          </div>

          <div>
            <h3 className="section-title">Take the Seven Day Trash Tracker Challenge</h3>
            <Auth />
            <img src= { recycleGraphic } alt="recycle logo"></img>
          </div>

      </div>
    );
  }
}

export default Challenge;
