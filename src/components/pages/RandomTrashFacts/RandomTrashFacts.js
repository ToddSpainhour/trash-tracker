import React from 'react';

import FactCard from '../../shared/FactCard/FactCard';
import trashData from '../../../helpers/data/trashData';

import './RandomTrashFacts.scss';

class RandomTrashFacts extends React.Component {
  state = {
    facts: [],
  }

  componentDidMount() {
    this.getFacts();
  }

  // componentDidUpdate(facts) {
  //   console.error('componentDidUpdate in randomTrashFacts says that facts is...', facts); // undefined
  // }

  getFacts = () => {
    trashData.getTrashFacts()
      // .then((facts) => this.setState({ facts }))
      .then((facts) => this.setState({ facts }))
      .catch((err) => console.error('cannot get trash facts', err));
  }

  render() {
    const { facts } = this.state;
    console.log('facts.length is...', facts.length);
    // console.error('facts in this.state is', facts);
    const buildSingleFactCard = facts[Math.floor(Math.random() * facts.length)]; // undefined
    console.error('buildSingleFactCard in randomTrashData is...', buildSingleFactCard);
    // this.pickRandomFact();
    // const factsArray = this.state.facts; // undefined
    // console.error('inside RandomTrashFacts.js your factsArray is...', factsArray.randomFact); // returns undefined and runs twice?
    return (
      <div className="RandomTrashFacts">
        <h5>Random Trash Facts Page</h5>
      </div>
    );
  }
}

export default RandomTrashFacts;
