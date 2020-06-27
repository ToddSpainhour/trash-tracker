import React from 'react';

// import FactCard from '../../shared/FactCard/FactCard';
import trashData from '../../../helpers/data/trashData';

import './RandomTrashFacts.scss';

class RandomTrashFacts extends React.Component {
  state = {
    facts: [],
    chosenFact: {},
  }

  componentDidMount() {
    this.getFacts();
  }

  getFacts = () => {
    trashData.getTrashFacts()
      .then((facts) => this.setState({ facts }))
      .then(() => {
        const pickRandomFact = () => this.state.facts[Math.floor(Math.random() * this.state.facts.length)];
        const chosenFact = pickRandomFact();
        this.setState({ chosenFact });
      })
      .catch((err) => console.error('cannot get facts', err));
  };

  render() {
    const { chosenFact } = this.state;

    return (
    <div className="RandomTrashFacts">
      <h5>Random Trash Facts Page</h5>
    <h5>{chosenFact.randomFact}</h5>
    <h5>{chosenFact.materialId}</h5>
    <h5>{chosenFact.factSource}</h5>
    </div>
    );
  }
}

export default RandomTrashFacts;
