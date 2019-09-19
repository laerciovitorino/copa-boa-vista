import React from 'react';

import * as aspirantRounds from '../resources/data/aspirantRounds.json';
import * as titularRounds from '../resources/data/titularRounds.json';
import Match from './Match';

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Games extends React.Component {
  state = {
    rounds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    selectedRound: 9
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
      <div className="games_col">
        <h2 className="games__title">Jogos</h2>
        <nav aria-label="Page navigation example" className="games">
          <ul className="pagination d-flex justify-content-between">
            <li className="page-item">
              <a className="page-left" href="#">
                {
                  this.state.selectedRound === 1 ?
                  <FontAwesomeIcon icon={faChevronLeft} style={{color: "lightgrey", cursor: "default"}} onClick={this.handleRoundLeft} /> :
                  <FontAwesomeIcon icon={faChevronLeft} onClick={this.handleRoundLeft} />
                }
              </a>
            </li>
            <li>{this.state.selectedRound}&#170; Rodada</li>
            <li className="page-item">
              <a className="page-right" href="#">
                {
                  this.state.selectedRound === this.state.rounds.length ?
                  <FontAwesomeIcon icon={faChevronRight} style={{color: "lightgrey", cursor: "default"}} onClick={this.handleRoundRight}/> :
                  <FontAwesomeIcon icon={faChevronRight} onClick={this.handleRoundRight}/>
                }
              </a>
            </li>
          </ul>
        </nav>
        {this.props.displayTitular && Object.values(titularRounds)[this.state.selectedRound-1].map((round) => (
          <ul className="list-group list-group-flush" key={Math.random()}>
            <li className="list-group-item">
              <Match round={round} />
            </li>
          </ul>
        ))}
        {this.props.displayAspirant && Object.values(aspirantRounds)[this.state.selectedRound-1].map((round) => (
          <ul className="list-group list-group-flush" key={Math.random()}>
            <li className="list-group-item">
              <Match round={round} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}