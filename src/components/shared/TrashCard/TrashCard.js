import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import trashShape from '../../../helpers/propz/trashShape';
import RecycleImage from '../../../images/recycle-logo-test-illustrator-inline-1-01.svg';

import './TrashCard.scss';

class TrashCard extends React.Component {
  static propTypes = {
    trashItem: trashShape.trashShape,
    removeTrash: PropTypes.func.isRequired,
  }

  render() {
    const { trashItem, removeTrash } = this.props;

    const editLink = `/edittrash/${trashItem.id}`;

    return (
      <div className="TrashCard col-md-4 col-sm-12">
        <div className="card border-dark m-3">
          <h3>{trashItem.trashName}</h3>
          <h5>{trashItem.trashDescription}</h5>
          <h5>{trashItem.materialId}</h5>
          <h5>{trashItem.isRecyclable}</h5>
          {/* <h5> {trashItem.didYouRecycle ? 'you recycled. Yippee' : 'Maybe next time'}</h5> */}
          { trashItem.didYouRecycle
            ? <img src= { RecycleImage } alt="recycle logo included in items recycled"/>
            : 'Maybe next time'}
          <h4>{trashItem.didYouRecycle}</h4>
          <h6>{trashItem.dateAdded}</h6>
          <div>
          <button className="btn btn-light btn-sm text-muted col-3" onClick={() => removeTrash(trashItem.id)}>Delete</button>
          <Link className="btn btn-light btn-sm text-muted" to={editLink}>Edit</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TrashCard;
