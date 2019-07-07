import React from 'react';

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Games extends React.Component {
  render() {
    return (
      <div>
        <h2 className="games__title">Jogos</h2>
        <nav aria-label="Page navigation example" className="games">
          <ul className="pagination d-flex justify-content-between">
            <li className="page-item">
              <a className="page-left" href="#"><FontAwesomeIcon icon={faChevronLeft} /></a>
            </li>
            <li>1&#170; Rodada</li>
            <li className="page-item">
              <a className="page-right" href="#"><FontAwesomeIcon icon={faChevronRight} /></a>
            </li>
          </ul>
        </nav>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="list-group-item__location d-flex justify-content-center">
              <span><strong>DOM 07/07/2019</strong> ARENA MÔNICA <strong>16:00</strong></span>
            </div>
            <div>
              <span className="match d-flex justify-content-center">ALV {0} X {0} ATL</span>
            </div>
          </li>
          <li className="list-group-item">
            <div className="list-group-item__location d-flex justify-content-center">
              <span><strong>DOM 07/07/2019</strong> ARENA MÔNICA <strong>16:00</strong></span>
            </div>
            <div>
              <span className="match d-flex justify-content-center">CAM {0} X {0} CAR</span>
            </div>
          </li>
          <li className="list-group-item">
            <div className="list-group-item__location d-flex justify-content-center">
              <span><strong>DOM 07/07/2019</strong> ARENA MÔNICA <strong>16:00</strong></span>
            </div>
            <div>
              <span className="match d-flex justify-content-center">GON {0} X {0} INT</span>
            </div>
          </li>
          <li className="list-group-item">
            <div className="list-group-item__location d-flex justify-content-center">
              <span><strong>DOM 07/07/2019</strong> ARENA MÔNICA <strong>16:00</strong></span>
            </div>
            <div>
              <span className="match d-flex justify-content-center">MAC {0} X {0} PAL</span>
            </div>
          </li>
          <li className="list-group-item">
            <div className="list-group-item__location d-flex justify-content-center">
              <span><strong>DOM 07/07/2019</strong> ARENA MÔNICA <strong>16:00</strong></span>
            </div>
            <div>
              <span className="match d-flex justify-content-center">SAM {0} X {0} SÃO</span>
            </div>
          </li>
          <li className="list-group-item">
            <div className="list-group-item__location d-flex justify-content-center">
              <span><strong>DOM 07/07/2019</strong> ARENA MÔNICA <strong>16:00</strong></span>
            </div>
            <div>
              <span className="match d-flex justify-content-center">SPO {0} X {0} VIL</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}