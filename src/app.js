import React from 'react';
import ReactDOM from 'react-dom';

console.log('copa boa vista is running!');

class Main extends React.Component {
  render() {
    return (
      <div>
        Main Component
        <Header />
        <Table />
        <Games />
        <TopScorer />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        Header Component
      </div>
    );
  }
}

class Table extends React.Component {
  render() {
    return (
      <div>
        Table Component
      </div>
    );
  }
}

class Games extends React.Component {
  render() {
    return (
      <div>
        Games Component
      </div>
    );
  }
}

class TopScorer extends React.Component {
  render() {
    return (
      <div>
        Top Scorer
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));