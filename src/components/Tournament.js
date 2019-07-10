import React from 'react';

import Header from './Header';
import Table from './Table';
import Games from './Games';
import TopScorer from './TopScorer';

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Tournament extends React.Component {
  state = {
    displayAspirant: false,
    displayTitular: true
  }

  toggleGames = (displayAspirant, displayTitular) => {
    this.setState(() => {
      return {
        displayAspirant: displayTitular,
        displayTitular: displayAspirant
      }
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav aria-label="Page navigation example" className="tournament-fases">
                <ul className="pagination d-flex justify-content-between">
                  <li className="page-item">
                    <a className="page-left" href="#"><FontAwesomeIcon icon={faChevronLeft} /></a>
                  </li>
                  <li>PRIMEIRA FASE</li>
                  <li className="page-item">
                    <a className="page-right" href="#"><FontAwesomeIcon icon={faChevronRight} /></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <Table toggleGames={this.toggleGames}/>
            </div>
            <div className="col-md-4">
              <Games displayAspirant={this.state.displayAspirant} displayTitular={this.state.displayTitular}/>
            </div>
          </div>
          <TopScorer />
        </div>
      </div>
    );
  }
}