import React from 'react';

import authData from '../../../helpers/data/authData';
import trashData from '../../../helpers/data/trashData';

import TrashCard from '../../shared/TrashCard/TrashCard';

import './MyTrash.scss';

class MyTrash extends React.Component {
  state = {
    trashArray: [],
    numberOfRecycedItems: 0,
    recycledNumber: 0,
  }

  componentDidMount() {
    this.getTrash();
    // this.howManyRecycled();
  }

  // getTrash = () => {
  //   const uid = authData.getUid();
  //   trashData.getTrashByUid(uid)
  //     .then((trashArray) => this.setState({ trashArray }))
  //     .catch((err) => console.error('connot get trash...', err));
  // }

  getTrash = () => {
    const uid = authData.getUid();
    trashData.getTrashByUid(uid)
      .then((trashArray) => {
        this.setState({ trashArray });
        const newArray = this.state.trashArray.map((item) => item.didYouRecycle);
        const amountOfRecycledItems = newArray.filter((a) => a === 'true');
        const recycledNumber = amountOfRecycledItems.length;
        console.error('recycledNumber is...', recycledNumber);
        this.setState({ numberOfRecycedItems: recycledNumber });
      })
      .catch((err) => console.error('connot get trash...', err));
  }

  // howManyRecycled = () => {
  //   const newArray = this.state.trashArray.map((item) => item.didYouRecycle);
  //   const amountOfRecycledItems = newArray.filter((a) => a === 'true');
  //   // console.error('newArray is...', newArray);
  //   // console.error('amountOfRecycledItems is...', amountOfRecycledItems);
  //   const recycledNumber = amountOfRecycledItems.length;
  //   console.error('recycledNumber is...', recycledNumber);
  //   // return recycledNumber;
  //   // this.setState({ numberOfRecycedItems: recycledNumber });
  // }

  // componentDidUpdate() {
  //   const numberOfRecycledItems = () => this.howManyRecycled();
  //   this.setState({ numberOfRecycledItems });
  // }

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
    const { trashArray } = this.state;
    // this.howManyRecycled();
    // this.numberOfRecycledItems();

    const buildTrashCards = trashArray.map((trashItem) => (
      <TrashCard trashItem={trashItem} key={trashItem.id} removeTrash={this.removeTrash}/>
    ));
    return (
      <div className="MyTrash col-12">
        <h5>MyTrash READ</h5>
        <button className="btn btn-dark btn-sm" onClick={this.openCreateNewTrashForm}>Add More Trash</button>
        <div className="my-trash-stats">
    {/* <h5>Out of {myTrashArrayLength} items you've recycled  items</h5> */}
        </div>
          <div className="row">
              {buildTrashCards}
          </div>
      </div>
    );
  }
}

export default MyTrash;
