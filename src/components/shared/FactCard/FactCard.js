import React from 'react';

import './FactCard.scss';

class FactCard extends React.Component {
  render() {
    const { fact } = this.props;
    return (
      <div className="FactCard">
      <h5>This is an individual fact card</h5>;
    <h5>{fact.randomFact}</h5>
    </div>
    );
  }
}

export default FactCard;
