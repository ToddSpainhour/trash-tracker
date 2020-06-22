import React from 'react';

import authData from '../../../helpers/data/authData';
import trashData from '../../../helpers/data/trashData';

import TrashCard from '../../shared/TrashCard/TrashCard';

import './MyTrash.scss';

class MyTrash extends React.Component {
  state = {
    trashArray: [],
  }

  getTrash = () => {
    const uid = authData.getUid();
    trashData.getTrashByUid(uid)
      .then((trashArray) => this.setState({ trashArray }))
      .catch((err) => console.error('connot get trash...', err));
  }

  componentDidMount() {
    this.getTrash();
  }

removeTrash = (trashId) => {
  trashData.deleteTrash(trashId)
    .then(() => this.getTrash())
    .catch((err) => console.error('cannot delete trash', err));
}

render() {
  const { trashArray } = this.state;
  const buildTrashCards = trashArray.map((trashItem) => (
    <TrashCard trashItem={trashItem} key={trashItem.id} removeTrash={this.removeTrash}/>
  ));
  return (
    <div className="MyTrash col-12">
      <h5>MyTrash READ</h5>
        <div className="row">
            {buildTrashCards}
        </div>
    </div>
  );
}
}

export default MyTrash;
