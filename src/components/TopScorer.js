import React from 'react';

import * as Scorers from '../resources/data/topScorers.json';

export default class TopScorer extends React.Component {
  // fazer a função que irá calcular as posições dos artilheiros
  render() {
    return (
      <div>
        <h2 className="scorers__title">Artilheiros</h2>
        <div className="scorers__subtitle d-flex justify-content-between">
          <span className="scorers__subtitle__player">Classificação</span>
          <span className="scorers__subtitle__goals">Gols</span>
        </div>
        <ul className="list-group list-group-flush scorers">
          {1 === 0 && Object.values(Scorers)[0].map((scorer) => (
            <li className="list-group-item" key={scorer["name"]}>
              <span>{1}</span>
              <span><img src={require('../resources/images/logos/' + scorer["photo"])} className="scorers__photo" /></span>
              <span><img src={require('../resources/images/logos/' + scorer["shield"])} className="scorers__shield" /></span>
              <div className="scorers__name_position">
                <div className="scorers__name">{scorer["name"]}</div>
                <div className="scorers__position">{scorer["position"]}</div>
              </div>
              <span className="scorers_goals">{scorer["goals"]}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}