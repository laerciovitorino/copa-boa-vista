import React from 'react';

export default class TopScorer extends React.Component {
  render() {
    return (
      <div>
        <h2 className="scorers__title">Artilheiros</h2>
        <ul className="list-group list-group-flush scorers">
          <li className="scorers__subtitle d-flex justify-content-between">
            <span className="scorers__subtitle__player">Jogador</span>
            <span className="scorers__subtitle__goals">Gols</span>
          </li>
          <li className="list-group-item">
            <span># </span>
            <span>foto </span>
            <span>símbolo </span>
            <span>Nome </span>
            <span>#</span>
          </li>
          <li className="list-group-item">
            <span># </span>
            <span>foto </span>
            <span>símbolo </span>
            <span>Nome </span>
            <span>#</span>
          </li>
        </ul>
      </div>
    );
  }
}