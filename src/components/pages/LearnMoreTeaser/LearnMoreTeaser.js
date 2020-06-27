import React from 'react';
import { Link } from 'react-router-dom';

import './LearnMoreTeaser.scss';

class LearnMoreTeaser extends React.Component {
  render() {
    return (
      <div className="LearnMoreTeaser">
        <h5>Learn More Teaser</h5>
        <Link to="/learnmore" className="btn btn-light btn-sm text-muted">Click Here to Learn More</Link>

      </div>
    );
  }
}

export default LearnMoreTeaser;
