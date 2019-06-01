import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>XIII Copa Boa Vista de Futebol</h1>
        <ul>
          <li><a href="#">Times</a></li>
          <li><a href="#">Jogadores</a></li>
          <li><a href="#">Histórico</a></li>
          <li><a href="#">Regulamento</a></li>
        </ul>
      </div>
    );
  }
}

// Colocar cada component em seu próprio arquivo
const Times = (props) => {
  return (
    <div>
      Lista de Times
    </div>
  );
};

const Jogadores = (props) => {
  return (
    <div>
      Lista de Jogadores
    </div>
  );
};

const Historico = (props) => {
  return (
    <div>
      Histórico da Competição
    </div>
  );
};

const Regulamento = (props) => {
  return (
    <div>
      Regulamento da Competição
    </div>
  );
};