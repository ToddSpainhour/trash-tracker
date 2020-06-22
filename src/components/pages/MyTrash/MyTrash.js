import React from 'react';

import authData from '../../../helpers/data/authData';
import trashData from '../../../helpers/data/trashData';

import TrashCard from '../../shared/TrashCard/TrashCard';

import './MyTrash.scss';

class MyTrash extends React.Component {
  state = {
    trashArray: [],
  }

  componentDidMount() {
    this.getTrash();
  }

  getTrash = () => {
    const uid = authData.getUid();
    trashData.getTrashByUid(uid)
      .then((trashArray) => this.setState({ trashArray }))
      .catch((err) => console.error('connot get trash...', err));
  }

  removeTrash = (trashId) => {
    trashData.deleteTrash(trashId)
      .then(() => this.getTrash())
      .catch((err) => console.error('cannot delete trash', err));
  }

  addTrashEvent = (e) => {
    e.preventDefault();
    trashData.createNewTrash();
  }

  render() {
    const { trashArray } = this.state;
    const buildTrashCards = trashArray.map((trashItem) => (
      <TrashCard trashItem={trashItem} key={trashItem.id} removeTrash={this.removeTrash}/>
    ));
    return (
      <div className="MyTrash col-12">
        <h5>MyTrash READ</h5>
        <button className="btn btn-dark btn-sm" onClick={this.addTrashEvent}>Add More Trash</button>
          <div className="row">
              {buildTrashCards}
          </div>
      </div>
    );
  }
}

export default MyTrash;
