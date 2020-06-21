import React from 'react';

import './TrashCard.scss';

class TrashCard extends React.Component {
  render() {
    const { trash } = this.props;
    return (
      <div className="TrashCard">
        {trash.trashName}
      </div>
    );
  }
}

export default TrashCard;
