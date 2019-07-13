import React from 'react';

import * as aspirantRounds from '../resources/data/aspirantRounds.json';
import * as titularRounds from '../resources/data/titularRounds.json';

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Games extends React.Component {
  state = {
    rounds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    selectedRound: 1
  }

  handleRoundRight = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      const roundRight = prevState.selectedRound < this.state.rounds.length ? prevState.selectedRound + 1 : this.state.rounds.length;
      return {
        selectedRound: this.state.rounds[roundRight-1]
      }
    });
  }

  handleRoundLeft = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      const roundLeft = prevState.selectedRound > 1 ? prevState.selectedRound - 1 : 1;
      return {
        selectedRound: this.state.rounds[roundLeft-1]
      }
    });
  }

  render() {
    return (
      <div>
        <h2 className="games__title">Jogos</h2>
        <nav aria-label="Page navigation example" className="games">
          <ul className="pagination d-flex justify-content-between">
            <li className="page-item">
              <a className="page-left" href="#">
                {
                  this.state.selectedRound === 1 ?
                  <FontAwesomeIcon icon={faChevronLeft} style={{color: "grey"}} onClick={this.handleRoundLeft} /> :
                  <FontAwesomeIcon icon={faChevronLeft} onClick={this.handleRoundLeft} />
                }
              </a>
            </li>
            <li>{this.state.selectedRound}&#170; Rodada</li>
            <li className="page-item">
              <a className="page-right" href="#">
                {
                  this.state.selectedRound === this.state.rounds.length ?
                  <FontAwesomeIcon icon={faChevronRight} style={{color: "grey"}} onClick={this.handleRoundRight}/> :
                  <FontAwesomeIcon icon={faChevronRight} onClick={this.handleRoundRight}/>
                }
              </a>
            </li>
          </ul>
        </nav>
        {this.props.displayTitular && Object.values(titularRounds)[this.state.selectedRound-1].map((round) => (
          <ul className="list-group list-group-flush" key={Math.random()}>
            <li className="list-group-item">
              <div className="list-group-item__location d-flex justify-content-center">
                <span><strong>{round["date"]}</strong> {round["location"]} <strong>{round["time"]}</strong></span>
              </div>
              <div className="match d-flex justify-content-between">
                <span>{round["team_1_short"]}<img src={require('../resources/images/logos/' + round["team_1"] + '.jpg')} className="logo-left" /></span>
                <span>{round["score_team_1"] > -1 && <strong>{round["score_team_1"]}</strong>}<span className="games__delimiter">X</span>{round["score_team_2"] > -1 && <strong>{round["score_team_2"]}</strong>}</span>
                <span><img src={require('../resources/images/logos/' + round["team_2"] + '.jpg')} className="logo-right" />{round["team_2_short"]}</span>
              </div>
            </li>
          </ul>
        ))}
        {this.props.displayAspirant && Object.values(aspirantRounds)[this.state.selectedRound-1].map((round) => (
          <ul className="list-group list-group-flush" key={Math.random()}>
            <li className="list-group-item">
              <div className="list-group-item__location d-flex justify-content-center">
                <span><strong>{round["date"]}</strong> {round["location"]} <strong>{round["time"]}</strong></span>
              </div>
              <div className="match d-flex justify-content-between">
                <span>{round["team_1_short"]}<img src={require('../resources/images/logos/' + round["team_1"] + '.jpg')} className="logo-left" /></span>
                <span>{round["score_team_1"] > -1 && <strong>{round["score_team_1"]}</strong>}<span className="games__delimiter">X</span>{round["score_team_2"] > -1 && <strong>{round["score_team_2"]}</strong>}</span>
                <span><img src={require('../resources/images/logos/' + round["team_2"] + '.jpg')} className="logo-right" />{round["team_2_short"]}</span>
              </div>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}