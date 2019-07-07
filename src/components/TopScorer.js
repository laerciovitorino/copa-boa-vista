import React from 'react';

export default class TopScorer extends React.Component {
  render() {
    return (
      <div>
        <h2>Artilheiros</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span># </span>
            <span>foto </span>
            <span>símbolo </span>
            <span>Nome </span>
            <span>#</span>
          </li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    );
  }
}