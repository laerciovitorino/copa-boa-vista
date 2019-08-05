import React from 'react';

import RegulationModal from './RegulationModal';

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Header extends React.Component {
  state = {
    displayRegulationModal: false,
    showTeamsModal: false
  }

  showRegulationModal = () => {
    this.setState({ displayRegulationModal: true });
  };

  hideRegulationModal = () => {
    this.setState({ displayRegulationModal: false })
  }

  render() {
    return (
      <div>
        <ul className="nav nav-tabs header">
          <h1 className="header__title">XXIII Copa Boa Vista de Futebol</h1>
          <li className="nav-item dropdown header__menu">
            <a target="_blank"><FontAwesomeIcon icon={faBars} style={{color:"white"}} /></a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item header__menu__item" href="#" onClick={this.showRegulationModal}>
                <RegulationModal
                  show={this.state.displayRegulationModal}
                  handleClose={this.hideRegulationModal}
                />
                  Regulamento
              </a>
            </div>
          </li>
          <li className="header__menu-options">
            <a className="header__menu-item" href="#" onClick={this.showRegulationModal}>
              <RegulationModal
                show={this.state.displayRegulationModal}
                handleClose={this.hideRegulationModal}
              />
              <button className="header__button">Regulamento</button>
            </a>
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