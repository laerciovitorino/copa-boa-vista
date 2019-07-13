import React from 'react';

import * as Constants from '../resources/constants';
import * as aspirantRounds from '../resources/data/aspirantRounds.json';
import * as titularRounds from '../resources/data/titularRounds.json';

export default class Table extends React.Component {
  state = {
    teams: [
      "alvorada",
      "atletico",
      "camaroes",
      "cariri",
      "gonzagao",
      "internacional",
      "macedao",
      "palmeiras",
      "sampaiao",
      "sao-paulo",
      "sport"
    ],
    names: [
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

  handleAspirantScores = () => {
    let results = {
      "alvorada": [0, 0, 0, 0, 0, 0, 0, 0, 0],
      "atletico": [0, 0, 0, 0, 0, 0, 0, 0, 0],
      "camaroes": [0, 0, 0, 0, 0, 0, 0, 0, 0],
      "cariri": [0, 0, 0, 0, 0, 0, 0, 0, 0],
      "gonzagao": [0, 0, 0, 0, 0, 0, 0, 0, 0],
      "internacional": [0, 0, 0, 0, 0, 0, 0, 0, 0],
      "macedao": [0, 0, 0, 0, 0, 0, 0, 0, 0],
      "palmeiras": [0, 0, 0, 0, 0, 0, 0, 0, 0],
      "sampaiao": [0, 0, 0, 0, 0, 0, 0, 0, 0],
      "sao-paulo": [0, 0, 0, 0, 0, 0, 0, 0, 0],
      "sport": [0, 0, 0, 0, 0, 0, 0, 0, 0],
    };

    Object.values(aspirantRounds).map((round, index) => {
      if (index < Object.keys(aspirantRounds).length - 1) {
        Object.values(round).map((match) => {
          if (match["score_team_1"] > -1 && match["score_team_1"] > -1){
            if (match["score_team_1"] > match["score_team_2"]) {
              // team_1 results
              results[match["team_1"]][0] += 3;
              results[match["team_1"]][1] += index + 1;
              results[match["team_1"]][2] += 1;
              results[match["team_1"]][5] += match["score_team_1"];
              results[match["team_1"]][6] += match["score_team_2"];
              results[match["team_1"]][7] += results[match["team_1"]][5] - results[match["team_1"]][6];
              results[match["team_1"]][8] = ((results[match["team_1"]][0] / ((index + 1) * 3)) * 100).toFixed(1);
  
              // team_2 results
              results[match["team_2"]][0] += 0;
              results[match["team_2"]][1] += index + 1;
              results[match["team_2"]][4] += 1;
              results[match["team_2"]][5] += match["score_team_2"];
              results[match["team_2"]][6] += match["score_team_1"];
              results[match["team_2"]][7] += results[match["team_2"]][5] - results[match["team_2"]][6];
              results[match["team_2"]][8] = ((results[match["team_2"]][0] / ((index + 1) * 3)) * 100).toFixed(1);
  
            } else if (match["score_team_1"] === match["score_team_2"]) {
              // team_1 results
              results[match["team_1"]][0] += 1;
              results[match["team_1"]][1] += index + 1;
              results[match["team_1"]][3] += 1;
              results[match["team_1"]][5] += match["score_team_1"];
              results[match["team_1"]][6] += match["score_team_2"];
              results[match["team_1"]][7] += results[match["team_1"]][5] - results[match["team_1"]][6];
              results[match["team_1"]][8] = ((results[match["team_1"]][0] / ((index + 1) * 3)) * 100).toFixed(1);
  
              // team_2 results
              results[match["team_2"]][0] += 1;
              results[match["team_2"]][1] += index + 1;
              results[match["team_2"]][3] += 1;
              results[match["team_2"]][5] += match["score_team_2"];
              results[match["team_2"]][6] += match["score_team_1"];
              results[match["team_2"]][7] += results[match["team_2"]][5] - results[match["team_2"]][6];
              results[match["team_2"]][8] = ((results[match["team_2"]][0] / ((index + 1) * 3)) * 100).toFixed(1);
            } else {
              // team_1 results
              results[match["team_1"]][0] += 0;
              results[match["team_1"]][1] += index + 1;
              results[match["team_1"]][4] += 1;
              results[match["team_1"]][5] += match["score_team_1"];
              results[match["team_1"]][6] += match["score_team_2"];
              results[match["team_1"]][7] += results[match["team_1"]][5] - results[match["team_1"]][6];
              results[match["team_1"]][8] = ((results[match["team_1"]][0] / ((index + 1) * 3)) * 100).toFixed(1);
  
              // team_2 results
              results[match["team_2"]][0] += 3;
              results[match["team_2"]][1] += index + 1;
              results[match["team_2"]][2] += 1;
              results[match["team_2"]][5] += match["score_team_2"];
              results[match["team_2"]][6] += match["score_team_1"];
              results[match["team_2"]][7] += results[match["team_2"]][5] - results[match["team_2"]][6];
              results[match["team_2"]][8] = ((results[match["team_2"]][0] / ((index + 1) * 3)) * 100).toFixed(1);
            }
          }
        });
      }
    });

    return results;
  }

  sortAspirantResults = () => {
    const results = this.handleAspirantScores();
    let sortedResults = [];

    let points = Number.MIN_VALUE;
    let wins = Number.MIN_VALUE;
    let goalsPro = Number.MIN_VALUE;
    let goalsAg = Number.MAX_VALUE;

    this.state.teams.map((team, index) => {
      if (sortedResults === []) {
        sortedResults.splice(0, 0, results[team].concat(team));
      } else {
        sortedResults.map((result) => {
          if (results[team][0] > result[0]) {
            sortedResults.splice(0, 0, results[team].concat(team));
          } else if (results[team][0] === result[0]) {
            if (results[team][2] > result[2]) {
              sortedResults.splice(0, 0, results[team].concat(team));
            } else if (results[team][2] === result[2]) {
              if (results[team][5] > result[5]) {
                sortedResults.splice(0, 0, results[team].concat(team));
              } else if (results[team][5] === result[5]) {
                if (results[team][5] <= result[5]) {
                  sortedResults.splice(0, 0, results[team].concat(team));
                } else {
                  sortedResults.splice(index, 0, results[team].concat(team));
                }
              } else {
                sortedResults.splice(index, 0, results[team].concat(team));
              }
            } else {
              sortedResults.splice(index, 0, results[team].concat(team));
            }
          } else {
            sortedResults.splice(index, 0, results[team].concat(team));
          }
        });
      }
    });
    console.log(sortedResults);
    return sortedResults;
  }

  handleTitularScores = () => {

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
            {this.state.names.map((team) => (
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
            {this.state.names.map((team, index) => (
              <tr key={index}>
                <td><span className="position">{1}</span>{team}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}%</td>
              </tr>
            ))}
          </tbody>
        </table>}
      </div>
    );
  }
}