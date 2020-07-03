import React from 'react';

import authData from '../../../helpers/data/authData';
import trashData from '../../../helpers/data/trashData';

import TrashCard from '../../shared/TrashCard/TrashCard';

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
        this.setState({ trashArray });
        const newArray = this.state.trashArray.map((item) => item.didYouRecycle);
        const amountOfRecycledItems = newArray.filter((a) => a === 'true');
        const recycledNumber = amountOfRecycledItems.length;
        console.error('recycledNumber is...', recycledNumber);
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
    const buildTrashCards = trashArray.map((trashItem) => (
      <TrashCard trashItem={trashItem} key={trashItem.id} removeTrash={this.removeTrash}/>
    ));
    return (
      <div className="MyTrash col-12">
        <div className=" my-trash-banner">
          <h5>MyTrash READ</h5>
            <button className="btn btn-sm add-more-button" onClick={this.openCreateNewTrashForm}>Add More Trash</button>
              <div className="my-trash-stats">
                <h5>Out of {totalNumberOfItems} items you've recycled {numberOfRecycledItems}!</h5>
              </div>
        </div>
        <div className="row">
          {buildTrashCards}
        </div>
      </div>
    );
  }
}

export default MyTrash;
