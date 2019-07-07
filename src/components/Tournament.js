import React from 'react';

import Header from './Header';
import Table from './Table';
import Games from './Games';
import TopScorer from './TopScorer';

export default class Tournament extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Table />
            </div>
            <div className="col-md-4">
              <Games />
            </div>
          </div>
          <TopScorer />
        </div>
      </div>
    );
  }
}