import React from 'react';

import Header from './Header';
import Table from './Table';
import Games from './Games';
import TopScorer from './TopScorer';

export default class Tournament extends React.Component {
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