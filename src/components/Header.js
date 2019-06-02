import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>XXIII Copa Boa Vista de Futebol</h1>
        <ul>
          <li><a href="#"><Times /></a></li>
          <li><a href="#"><Jogadores /></a></li>
          <li><a href="#"><Historico /></a></li>
          <li><a href="#"><Regulamento /></a></li>
        </ul>
      </div>
    );
  }
}

// Colocar cada component em seu próprio arquivo
const Times = (props) => {
  return (
    <div>
      Times (component)
    </div>
  );
};

const Jogadores = (props) => {
  return (
    <div>
      Jogadores (component)
    </div>
  );
};

const Historico = (props) => {
  return (
    <div>
      Histórico (component)
    </div>
  );
};

const Regulamento = (props) => {
  return (
    <div>
      Regulamento (component)
    </div>
  );
};