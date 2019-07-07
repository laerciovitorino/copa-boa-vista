import React from 'react';

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          <h1>XXIII Copa Boa Vista de Futebol</h1>
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><FontAwesomeIcon icon={faBars} /></a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#"><Times /></a>
              <a className="dropdown-item" href="#"><Jogadores /></a>
              <a className="dropdown-item" href="#"><Historico /></a>
              <a className="dropdown-item" href="#"><Regulamento /></a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

// Colocar cada component em seu próprio arquivo
const Times = (props) => {
  return (
    <div>
      Times
    </div>
  );
};

const Jogadores = (props) => {
  return (
    <div>
      Jogadores
    </div>
  );
};

const Historico = (props) => {
  return (
    <div>
      Histórico
    </div>
  );
};

const Regulamento = (props) => {
  return (
    <div>
      Regulamento
    </div>
  );
};