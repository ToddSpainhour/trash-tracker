import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import trashShape from '../../../helpers/propz/trashShape';
import RecycleGraphic from '../../../images/recycle-logo.svg';
import TrashCanGraphic from '../../../images/trash-can.svg';

import './TrashCard.scss';

class TrashCard extends React.Component {
  static propTypes = {
    trashItem: trashShape.trashShape,
    removeTrash: PropTypes.func.isRequired,
  }

  render() {
    const { trashItem, removeTrash } = this.props;

    const editLink = `/edittrash/${trashItem.id}`;

    let logo;
    if (trashItem.didYouRecycle === 'true') {
      logo = <img src= { RecycleGraphic } alt="recycle logo included in items recycled"/>;
    } else {
      logo = <img src= { TrashCanGraphic } alt="trash can for items not recycled"/>;
    }

    return (
      <div className="TrashCard col-md-4 col-sm-12">
        <div className="card border-dark m-3 p-3 card-bkg">
          <h3>{trashItem.trashName}</h3>
          <h5>{trashItem.trashDescription}</h5>
          <h5>{trashItem.materialId}</h5>
          {logo}
          <h6>{trashItem.dateAdded}</h6>
          <div className="card-buttons">
          <Link className="btn btn-sm" to={editLink}>Edit</Link>
          <button className="btn btn-sm col-3" onClick={() => removeTrash(trashItem.id)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TrashCard;
