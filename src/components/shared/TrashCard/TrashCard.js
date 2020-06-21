import React from 'react';

import trashShape from '../../../helpers/propz/trashShape';
import './TrashCard.scss';

class TrashCard extends React.Component {
  static propTypes = {
    trashItem: trashShape.trashShape,
  }

  render() {
    const { trashItem } = this.props;
    return (
      <div className="TrashCard col-md-4 col-sm-12">
        <div className="card border-dark m-3">
          <h3>{trashItem.trashName}</h3>
          <h5>{trashItem.trashDescription}</h5>
          <h5>{trashItem.materialId}</h5>
          <h5>{trashItem.isRecyclable}</h5>
          <h4>{trashItem.didYouRecycle}</h4>
          <h6>{trashItem.dateAdded}</h6>
        </div>
      </div>
    );
  }
}

export default TrashCard;
