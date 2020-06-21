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
    console.error('getTrash function inside MyTrash.js just fired!');
    trashData.getTrashByUid(uid)
      .then((trashArray) => this.setState({ trashArray }))
      .catch((err) => console.error('connot get trash...', err));
  }

  componentDidMount() {
    this.getTrash();
  }

  render() {
    const { trashArray } = this.state;
    const buildTrashCards = trashArray.map((trash) => (
      <TrashCard trash={trash}/>
    ));
    return (
      <div className="MyTrash">
        <h5>MyTrash READ</h5>
        {buildTrashCards}
      </div>
    );
  }
}

export default MyTrash;
