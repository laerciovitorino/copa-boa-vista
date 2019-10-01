import React from 'react';

import Games from './Games';
import Header from './Header';
import Match from './Match';
import Table from './Table';
import TopScorer from './TopScorer';

import * as finalAspirantRounds from '../resources/data/finalAspirantRounds.json';
import * as finalTitularRounds from '../resources/data/finalTitularRounds.json';

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Tournament extends React.Component {
  state = {
    displayAspirant: false,
    displayTitular: true,
    fases: ['PRIMEIRA FASE', 'QUARTAS DE FINAL', 'SEMIFINAL', 'FINAL'],
    selectedFase: 0
  }

  toggleGames = (displayAspirant, displayTitular) => {
    this.setState(() => {
      return {
        displayAspirant: displayTitular,
        displayTitular: displayAspirant
      }
    });
  }

  handleFaseLeft = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      const faseLeft = prevState.selectedFase > 0 ? prevState.selectedFase - 1 : 0;
      return {
        selectedFase: faseLeft
      }
    });
  }

  handleFaseRight = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      const faseRight = prevState.selectedFase < this.state.fases.length ? prevState.selectedFase + 1 : this.state.fases.length - 1;
      return {
        selectedFase: faseRight
      }
    });
  }

  handleClick = () => {
    this.setState(() => {
      return {
        displayAspirant: this.state.displayTitular,
        displayTitular: this.state.displayAspirant
      }
    });
  }

  handleGames = (fase, goingIndex, returnIndex) => {
    return (
      <div>
        <h2 className="table-fase__title">Tabela</h2>
        <div className="table-fase__buttons">
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
        <div className="row">
          <div className="col-md-6 border-right">
            {fase[0].going.map((round, index) => (
              <ul className="list-group list-group-flush" key={index}>
                <span className="badge badge-secondary game-badge">Jogo {goingIndex++} - ida</span>
                <li className="list-group-item">
                  <Match round={round} />
                </li>
              </ul>
            ))}
          </div>
          <div className="col-md-6 ">
            {fase[1].return.map((round, index) => (
              <ul className="list-group list-group-flush" key={index}>
                <span className="badge badge-secondary game-badge">Jogo {returnIndex++} - volta</span>
                <li className="list-group-item">
                  <Match round={round} />
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="table__bottom"></div>
      </div>
    );
  }

  handleFases = () => {
    if (this.state.selectedFase > 0) {
      let table = null;
      const goingIndex = 1;
      const returnIndex = 1; // index to help map the games across fases
      switch (this.state.fases[this.state.selectedFase]) {
        case 'QUARTAS DE FINAL':
          table = (
            this.state.displayTitular ?
            this.handleGames(Object.values(finalTitularRounds)[0], goingIndex, returnIndex) :
            this.handleGames(Object.values(finalAspirantRounds)[0], goingIndex, returnIndex)
          );
          break;
        case 'SEMIFINAL':
            table = (
              this.state.displayTitular ?
              this.handleGames(Object.values(finalTitularRounds)[1], goingIndex, returnIndex) :
              this.handleGames(Object.values(finalAspirantRounds)[1], goingIndex, returnIndex)
            );
          break;
        default:
          table = (
            this.state.displayTitular ?
            this.handleGames(Object.values(finalTitularRounds)[2], goingIndex, returnIndex) :
            this.handleGames(Object.values(finalAspirantRounds)[2], goingIndex, returnIndex)
          );
          break;
      }
      return table;
    } 
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination d-flex justify-content-between tournament-fases">
                  <li className="page-item">
                    <a href="#">
                      {
                        this.state.selectedFase === 0 ?
                        <FontAwesomeIcon icon={faChevronLeft} style={{color: "lightgrey", cursor: "default"}}/> :
                        <FontAwesomeIcon icon={faChevronLeft} onClick={this.handleFaseLeft}/>
                      }
                    </a>
                  </li>
                  <li className="fase-title">{this.state.fases[this.state.selectedFase]}</li>
                  <li className="page-item">
                    <a href="#">
                      {
                        this.state.selectedFase === this.state.fases.length - 1 ?
                        <FontAwesomeIcon icon={faChevronRight} style={{color: "lightgrey", cursor: "default"}}/> :
                        <FontAwesomeIcon icon={faChevronRight} onClick={this.handleFaseRight}/>
                      }
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {
            this.state.fases[this.state.selectedFase] === 'PRIMEIRA FASE' ?
              (<div className="row">
                <div className="col-md-8">
                  <Table
                    toggleGames={this.toggleGames}
                  />
                </div>
                <div className="col-md-auto">
                  <Games
                    displayAspirant={this.state.displayAspirant}
                    displayTitular={this.state.displayTitular}
                    handleScores={this.handleScores}
                  />
                </div>
              </div>) :
              this.handleFases()
          }
          <TopScorer
            displayAspirant={this.state.displayAspirant}
            displayTitular={this.state.displayTitular}
          />
          <div className="row bottom-section">
            <div className="col-md-12">
              <footer className="credits">Laércio Vitorino e Lavoisier Vitorino 2019 &copy;</footer>
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}