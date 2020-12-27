import React from 'react';
import authData from '../../../helpers/data/authData';
import trashData from '../../../helpers/data/trashData';

import TrashCard from '../../shared/TrashCard/TrashCard';
import TrashCanGraphic from '../../../images/trash-can.svg';

import './MyTrash.scss';

class MyTrash extends React.Component {
  state = {
    trashArray: [],
    numberOfRecycledItems: 0,
    recycledNumber: 0,
  }

  componentDidMount() {
    this.getTrash();
  }

  getTrash = () => {
    const uid = authData.getUid();
    trashData.getTrashByUid(uid)
      .then((trashArray) => {
        trashArray.sort((oldest, newest) => newest.timestampForSorting - oldest.timestampForSorting);
        this.setState({ trashArray });
        const newArray = this.state.trashArray.map((item) => item.didYouRecycle);
        const amountOfRecycledItems = newArray.filter((a) => a === 'true');
        const recycledNumber = amountOfRecycledItems.length;
        this.setState({ numberOfRecycledItems: recycledNumber });
      })
      .catch((err) => console.error('connot get trash...', err));
  }

  removeTrash = (trashId) => {
    trashData.deleteTrash(trashId)
      .then(() => this.getTrash())
      .catch((err) => console.error('cannot delete trash', err));
  }

  openCreateNewTrashForm = (e) => {
    e.preventDefault();
    this.props.history.push('/newtrash/');
  }

  render() {
    const { trashArray, numberOfRecycledItems } = this.state;
    const totalNumberOfItems = this.state.trashArray.length;
    let buildTrashCards;

    if (trashArray.length === 0) {
      buildTrashCards = <div className="empty-trash-array col-12">
          <img src={ TrashCanGraphic } className="trash-can-graphic col-6"alt="trash can graphic"/>
        </div>;
    } else {
      buildTrashCards = trashArray.map((trashItem) => (
      <TrashCard trashItem={trashItem} key={trashItem.id} removeTrash={this.removeTrash}/>
      ));
    }

    let addMoreTrashButton;
    if (trashArray.length === 0) {
      addMoreTrashButton = <button className="btn add-more-button" onClick={this.openCreateNewTrashForm}>Add Your First Item</button>;
    } else {
      addMoreTrashButton = <button className="btn add-more-button" onClick={this.openCreateNewTrashForm}>Add More Trash</button>;
    }

    return (
      <div className="MyTrash col-12">
        <div className=" my-trash-banner">
          <h2 className="my-trash-header">My Trash</h2>
            <div className="my-trash-stats">
              <h5> You've recycled {numberOfRecycledItems} out of {totalNumberOfItems} items.</h5>
            </div>
            {addMoreTrashButton}
        </div>
        <div className="row">
          {buildTrashCards}
        </div>
      </div>
    );
  }
}

export default MyTrash;
