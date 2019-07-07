import React from 'react';

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Games extends React.Component {
  render() {
    return (
      <div>
        <h2>Jogos</h2>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a href="#"><FontAwesomeIcon icon={faChevronLeft} /></a>
            </li>
            <li>X Rodada</li>
            <li className="page-item">
              <a href="#"><FontAwesomeIcon icon={faChevronRight} /></a>
            </li>
          </ul>
        </nav>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div>
              <span>DIA DATA LOCAL HORÁRIO</span>
            </div>
            <div>
              <span>Time 1 X Time 2</span>
            </div>
          </li>
          <li className="list-group-item">
            <div>
              <span>DIA DATA LOCAL HORÁRIO</span>
            </div>
            <div>
              <span>Time 1 X Time 2</span>
            </div>
          </li>
          <li className="list-group-item">
            <div>
              <span>DIA DATA LOCAL HORÁRIO</span>
            </div>
            <div>
              <span>Time 1 X Time 2</span>
            </div>
          </li>
          <li className="list-group-item">
            <div>
              <span>DIA DATA LOCAL HORÁRIO</span>
            </div>
            <div>
              <span>Time 1 X Time 2</span>
            </div>
          </li>
          <li className="list-group-item">
            <div>
              <span>DIA DATA LOCAL HORÁRIO</span>
            </div>
            <div>
              <span>Time 1 X Time 2</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}