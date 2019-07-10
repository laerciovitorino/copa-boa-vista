import React from 'react';

import Games from './Games';
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
    ],
    displayAspirant: false,
    displayTitular: true
  }

  handleClick = () => {
    this.setState(() => {
      return {
        displayAspirant: this.state.displayTitular,
        displayTitular: this.state.displayAspirant
      }
    });

    this.props.toggleGames(this.state.displayAspirant, this.state.displayTitular);
  }

  render() {
    return (
      <div>
        <h2 className="table__title">Tabela</h2>
        <div>
          {
            this.state.displayTitular ?
              <button type="button" className="btn btn-secondary active button-titular" onClick={this.handleClick}>
                Titular
              </button> :
              <button type="button" className="btn btn-light button-titular" onClick={this.handleClick}>
                Titular
              </button>
          }
          {
            this.state.displayAspirant ?
              <button type="button" className="btn btn-secondary active" onClick={this.handleClick}>
                Aspirante
              </button> :
              <button type="button" className="btn btn-light" onClick={this.handleClick}>
                Aspirante
              </button>
          }
        </div>
        {this.state.displayTitular && <table className="table table-striped table-responsive-md">
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
        </table>}
        {this.state.displayAspirant && <table className="table table-striped table-responsive-md aspirant">
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
                <td>1</td>
                <td>1</td>
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
        </table>}
      </div>
    );
  }
}