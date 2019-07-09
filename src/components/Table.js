import React from 'react';

import * as Constants from '../resources/constants';

export default class Table extends React.Component {
  state = {
    teams: [
      Constants.ALVORADA,
      Constants.ATLETICO,
      Constants.CAMAROES,
      Constants.CARIRI,
      Constants.GONZAGAO,
      Constants.INTERNACIONAL,
      Constants.MACEDAO,
      Constants.PALMEIRAS,
      Constants.SAMPAIAO,
      Constants.SAO_PAULO,
      Constants.SPORT
    ]
  }

  render() {
    return (
      <div>
        <h2 className="table__title">Tabela</h2>
        <div>
          <button type="button" className="btn btn-outline-secondary active button-holder">Titular</button>
          <button type="button" className="btn btn-outline-secondary">Aspirante</button>
        </div>
        <table className="table table-striped table-responsive-md">
          <thead className="thead-dark">
            <tr>
              <th>Time</th>
              <th>P</th>
              <th>J</th>
              <th>V</th>
              <th>E</th>
              <th>D</th>
              <th>GP</th>
              <th>GC</th>
              <th>SG</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {this.state.teams.map((team) => (
              <tr key={team}>
                <td><span className="position">{1}</span>{team}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}