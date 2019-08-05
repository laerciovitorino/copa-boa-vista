import React from 'react';

import SummaryModal from './SummaryModal';

export default class Match extends React.Component {
  state = {
    displaySummaryModal: false
  }

  showSummaryModal = (e) => {
    e.preventDefault();
    this.setState({ displaySummaryModal: true });
  };

  hideSummaryModal = (e) => {
    e.preventDefault();
    this.setState({ displaySummaryModal: false })
  }

  render() {
    return(
      <div>
        <div className="list-group-item__location d-flex justify-content-center">
          <span><strong>{this.props.round["date"]}</strong> {this.props.round["location"]} <strong>{this.props.round["time"]}</strong></span>
        </div>
        <div className="match d-flex justify-content-between">
          <span>{this.props.round["team_1_short"]}
            <img src={require('../resources/images/logos/' + this.props.round["team_1"] + '.jpg')} className="logo-left" />
          </span>
          {this.props.round["score_team_1"] > -1 || this.props.round["score_team_2"] > -1 ?
            <span>
              {<strong>{this.props.round["score_team_1"]}</strong>}
              <span className="games__delimiter">X</span>
              {<strong>{this.props.round["score_team_2"]}</strong>}
            </span> :
            <span>
              <span className="empty-score"></span>
              <span className="games__delimiter">X</span>
              <span className="empty-score"></span>
            </span>
          }
          <span>
            <img src={require('../resources/images/logos/' + this.props.round["team_2"] + '.jpg')} className="logo-right" />{this.props.round["team_2_short"]}
          </span>
        </div>
      </div>
    );
  }
}