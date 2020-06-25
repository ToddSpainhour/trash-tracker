import React from 'react';

import trashData from '../../../helpers/data/trashData';

import './RandomTrashFacts.scss';

class RandomTrashFacts extends React.Component {
  state = {
    trashFacts: [],
  }

  componentDidMount() {
    this.getFacts();
  }

  getFacts = () => {
    trashData.getTrashFacts()
      .then((trashFacts) => this.setState({ trashFacts }))
      .catch((err) => console.error('cannot get trash facts', err));
  }

  render() {
    return (
      <div className="RandomTrashFacts">
        <h5>Random Trash Facts Page</h5>
      </div>
    );
  }
}

export default RandomTrashFacts;
