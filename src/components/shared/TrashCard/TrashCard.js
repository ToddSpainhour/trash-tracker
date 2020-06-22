import React from 'react';
import PropTypes from 'prop-types';

import trashShape from '../../../helpers/propz/trashShape';
import './TrashCard.scss';

class TrashCard extends React.Component {
  static propTypes = {
    trashItem: trashShape.trashShape,
    removeTrash: PropTypes.func.isRequired,
  }

  render() {
    const { trashItem, removeTrash } = this.props;
    return (
      <div className="TrashCard col-md-4 col-sm-12">
        <div className="card border-dark m-3">
          <h3>{trashItem.trashName}</h3>
          <h5>{trashItem.trashDescription}</h5>
          <h5>{trashItem.materialId}</h5>
          <h5>{trashItem.isRecyclable}</h5>
          <h4>{trashItem.didYouRecycle}</h4>
          <h6>{trashItem.dateAdded}</h6>
          <div>
          <button className="btn btn-light btn-sm text-muted col-3" onClick={() => removeTrash(trashItem.id)}>Delete</button>
          <button className="btn btn-light btn-sm text-muted col-3">Edit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TrashCard;
