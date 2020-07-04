import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="RandomTrashFacts col-12">
      <h2 className="fact-header">Did you know...</h2>
    <h4 className="fact-text col-10 offset-1">{chosenFact.randomFact}</h4>
    {/* <h5>{chosenFact.materialId}</h5> */}
    <h6 className="fact-source">Source: {chosenFact.factSource}</h6>
    <Link to="/trackmytrash" className="btn">Continue</Link>
    </div>
    );
  }
}

export default RandomTrashFacts;
