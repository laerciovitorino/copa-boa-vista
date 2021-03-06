import React from 'react';

import * as Constants from '../resources/constants';
import * as aspirantRounds from '../resources/data/aspirantRounds.json';
import * as titularRounds from '../resources/data/titularRounds.json';

export default class Table extends React.Component {
  state = {
    names: {
      "alvorada": Constants.ALVORADA,
      "atletico": Constants.ATLETICO,
      "camaroes": Constants.CAMAROES,
      "cariri": Constants.CARIRI,
      "gonzagao": Constants.GONZAGAO,
      "internacional": Constants.INTERNACIONAL,
      "macedao": Constants.MACEDAO,
      "palmeiras": Constants.PALMEIRAS,
      "sampaiao": Constants.SAMPAIAO,
      "sao-paulo": Constants.SAO_PAULO,
      "sport": Constants.SPORT,
    },
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

  handleScores = (groupRounds, squad) => {
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
    const rounds = groupRounds;

    Object.values(rounds).map((round, index) => {
      if (index < Object.keys(rounds).length - 1) {
        Object.values(round).map((match) => {
          if (match["team_1"] === 'cariri' && squad === 'titular') {
            // team_1 results - TODO Need to create a better rule for this
            results[match["team_1"]][0] = 0;
            results[match["team_1"]][1] = 0;
            results[match["team_1"]][2] = 0;
            results[match["team_1"]][5] = 0;
            results[match["team_1"]][6] = 0;
            results[match["team_1"]][7] = 0;
            results[match["team_1"]][8] = 0;
          } else if (match["team_2"] === 'cariri' && squad === 'titular') {
            // team_2 results - TODO Need to create a better rule for this as well
            results[match["team_2"]][0] = 0;
            results[match["team_2"]][1] = 0;
            results[match["team_2"]][2] = 0;
            results[match["team_2"]][5] = 0;
            results[match["team_2"]][6] = 0;
            results[match["team_2"]][7] = 0;
            results[match["team_2"]][8] = 0;
          } else {
            if (match["score_team_1"] > -1 && match["score_team_1"] > -1){
              if (match["score_team_1"] > match["score_team_2"]) {
                // team_1 results
                results[match["team_1"]][0] += 3;
                results[match["team_1"]][1] += 1;
                results[match["team_1"]][2] += 1;
                results[match["team_1"]][5] += match["score_team_1"];
                results[match["team_1"]][6] += match["score_team_2"];
                results[match["team_1"]][7] += match["score_team_1"] - match["score_team_2"];
                results[match["team_1"]][8] = ((results[match["team_1"]][0] / (results[match["team_1"]][1] * 3)) * 100).toFixed(1);
    
                // team_2 results
                results[match["team_2"]][0] += 0;
                results[match["team_2"]][1] += 1;
                results[match["team_2"]][4] += 1;
                results[match["team_2"]][5] += match["score_team_2"];
                results[match["team_2"]][6] += match["score_team_1"];
                results[match["team_2"]][7] += match["score_team_2"] - match["score_team_1"];
                results[match["team_2"]][8] = ((results[match["team_2"]][0] / (results[match["team_2"]][1] * 3)) * 100).toFixed(1);
    
              } else if (match["score_team_1"] === match["score_team_2"]) {
                // team_1 results
                results[match["team_1"]][0] += 1;
                results[match["team_1"]][1] += 1;
                results[match["team_1"]][3] += 1;
                results[match["team_1"]][5] += match["score_team_1"];
                results[match["team_1"]][6] += match["score_team_2"];
                results[match["team_1"]][8] = ((results[match["team_1"]][0] / (results[match["team_1"]][1] * 3)) * 100).toFixed(1);
    
                // team_2 results
                results[match["team_2"]][0] += 1;
                results[match["team_2"]][1] += 1;
                results[match["team_2"]][3] += 1;
                results[match["team_2"]][5] += match["score_team_2"];
                results[match["team_2"]][6] += match["score_team_1"];
                results[match["team_2"]][8] = ((results[match["team_2"]][0] / (results[match["team_2"]][1] * 3)) * 100).toFixed(1);
              } else {
                // team_1 results
                results[match["team_1"]][0] += 0;
                results[match["team_1"]][1] += 1;
                results[match["team_1"]][4] += 1;
                results[match["team_1"]][5] += match["score_team_1"];
                results[match["team_1"]][6] += match["score_team_2"];
                results[match["team_1"]][7] += match["score_team_1"] - match["score_team_2"];
                results[match["team_1"]][8] = ((results[match["team_1"]][0] / (results[match["team_1"]][1] * 3)) * 100).toFixed(1);
    
                // team_2 results
                results[match["team_2"]][0] += 3;
                results[match["team_2"]][1] += 1;
                results[match["team_2"]][2] += 1;
                results[match["team_2"]][5] += match["score_team_2"];
                results[match["team_2"]][6] += match["score_team_1"];
                results[match["team_2"]][7] += match["score_team_2"] - match["score_team_1"];
                results[match["team_2"]][8] = ((results[match["team_2"]][0] / (results[match["team_2"]][1] * 3)) * 100).toFixed(1);
              }
            }
          }
        });
      }
    });

    return results;
  }

  sortResults = (roundResults, squad) => {
    const results = this.handleScores(roundResults, squad);
    let sortedResults = [];
    const teams = Object.keys(results);

    teams.map((team, index) => {
      let position = 0;
      if (sortedResults.length === 0) {
        position = 0;
      } else {
        sortedResults.map((result, subindex) => {
          if (results[team][0] >= result[0]) {
            if (results[team][0] === result[0]) {
              if (results[team][2] >= result[2]) {
                if (results[team][2] === result[2]) {
                  if (results[team][5] >= result[5]) {
                    if (results[team][5] === result[5]) {
                      if (results[team][6] <= result[6]) {
                        if (results[team][6] === result[6]) {
                          if (team < result) {
                            position = subindex;
                          } else {
                            position = subindex > position ? subindex : position + 1;
                          }
                        } else {
                          position = subindex;
                        }
                      } else {
                        position = index;
                      }
                    } else {
                      position = subindex > position ? position : subindex;
                    }
                  } else {
                    position = subindex > position ? subindex : position + 1;
                  }
                } else {
                  if (subindex < position) {
                    position = subindex;
                  }
                }
              } else {
                position = subindex > position ? subindex + 1 : position + 1;
              }
            } else {
              if (subindex < position) {
                position = subindex;
              }
            }
          } else {
            position = subindex > position ? subindex : position + 1;
          }
        });
      }
      sortedResults.splice(position, 0, results[team].concat(team));
    });
    return sortedResults;
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
            {this.sortResults(Object(titularRounds), 'titular').map((result, index) => (
              <tr key={index}>
                <td>
                  {
                    index <= 7 ?
                      <span className="position" style={{color: "blue"}}>{index + 1}</span> :
                      <span className="position">{index + 1}</span>
                  }
                  {
                    index < 9 ?
                      <span className="ranking-align">{this.state.names[result[9]]}</span> :
                      result[9] === 'cariri' ?
                        <span style={{color: "grey", fontStyle: "italic"}}>{this.state.names[result[9]]}*</span> :
                        <span>{this.state.names[result[9]]}</span>
                  }
                </td>
                <td style={{fontWeight: "bold"}}>{result[0]}</td>
                <td>{result[1]}</td>
                <td>{result[2]}</td>
                <td>{result[3]}</td>
                <td>{result[4]}</td>
                <td>{result[5]}</td>
                <td>{result[6]}</td>
                <td>{result[7]}</td>
                <td>{result[8]}%</td>
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
            {this.sortResults(Object(aspirantRounds), 'aspirants').map((result, index) => (
              <tr key={index}>
                <td>
                  {
                    index <= 7 ?
                    <span className="position" style={{color: "blue"}}>{index + 1}</span> :
                    <span className="position">{index + 1}</span>
                  }
                  {
                    index < 9 ?
                    <span className="ranking-align">{this.state.names[result[9]]}</span> :
                    <span>{this.state.names[result[9]]}</span>
                  }
                </td>
                <td style={{fontWeight: "bold"}}>{result[0]}</td>
                <td>{result[1]}</td>
                <td>{result[2]}</td>
                <td>{result[3]}</td>
                <td>{result[4]}</td>
                <td>{result[5]}</td>
                <td>{result[6]}</td>
                <td>{result[7]}</td>
                <td>{result[8]}%</td>
              </tr>
            ))}
          </tbody>
        </table>}
        <div className="table__bottom-info">
          <div className="bottom-info-shape"></div>
          <span className="bottom-info-text">CLASSIFICADOS PARA QUARTAS DE FINAL</span>
          <br />
          <br />
          {
            this.state.displayTitular &&
              <span className="bottom-info-text" style={{color: "grey", fontSize: "12px", fontStyle: "italic"}}>
                * Time eliminado da competição
              </span>
          }
        </div>
      </div>
    );
  }
}