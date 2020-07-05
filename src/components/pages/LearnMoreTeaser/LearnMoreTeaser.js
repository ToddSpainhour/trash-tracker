import React from 'react';
import { Link } from 'react-router-dom';

import imagePlaceholder from '../../../images/recycle-logo.svg';
import './LearnMoreTeaser.scss';

class LearnMoreTeaser extends React.Component {
  render() {
    return (
      <div className="LearnMoreTeaser col-12">
                <div className="learnMoreTeaserImage col-md-4 col-sm-12">
          <img src={ imagePlaceholder } className="learn-more-teaser-img" alt="change this text"/>
        </div>
        <div className="learnMoreTeaserTextArea col-md-8 col-sm-12">
          <h2 className="learn-more-teaser-header">Together We Can Make A Difference</h2>
            <div className="line-divider col-6 offset-3"></div>
              <p className="learn-more-teaser-text-body col-md-8 col-sm-12">Small decisions on your part can impact the future in a positive way. Learn more about landfills, recycling, and what you can do to help.</p>

          <div className="learn-more-teaser-button-area">
            <Link to="/learnmore" className="btn btn-sm learn-more-teaser-button">Learn More</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LearnMoreTeaser;
