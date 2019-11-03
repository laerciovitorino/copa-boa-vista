import React from 'react';

import SummaryModal from './SummaryModal';
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          {
            this.props.round["team_1"] === '' ?
              <span className="unknown-team-left">
                {this.props.round["team_1_short"]}
                <FontAwesomeIcon icon={faShieldAlt} className="shield-left" />
              </span> :
              this.props.round["team_1"] === 'cariri' && this.props.round["team_1_short"].length > 3 ?
                <span className="cariri-left">
                  {this.props.round["team_1_short"]}
                  <img src={require('../resources/images/logos/' + this.props.round["team_1"] + '.jpg')} className="logo-left" />
                </span> :
                <span className="known-team-left">
                  {this.props.round["team_1_short"]}
                  <img src={require('../resources/images/logos/' + this.props.round["team_1"] + '.jpg')} className="logo-left" />
                </span>
          }
          {this.props.round["score_team_1"] > -1 || this.props.round["score_team_2"] > -1 ?
            <span>
              <span className="team-score">{<strong>{this.props.round["score_team_1"]}</strong>}</span>
              <span className="score-penalties-left">
                {this.props.round["score_team_1_penalties"] > -1 ?
                '(' + this.props.round["score_team_1_penalties"] + ')' : ''
                }
              </span>
              <span className="games__delimiter unknown-team-delimiter">X</span>
              <span className="score-penalties-right">
                {this.props.round["score_team_2_penalties"] > -1 ?
                '(' + this.props.round["score_team_2_penalties"] + ')' : ''
                }
              </span>
              <span className="team-score">{<strong>{this.props.round["score_team_2"]}</strong>}</span>
            </span> :
            <span>
              <span className="empty-score"></span>
              <span className="games__delimiter">X</span>
              <span className="empty-score"></span>
            </span>
          }
          {
            this.props.round["team_2"] === '' ?
              <span className="unknown-team-right">
                <FontAwesomeIcon icon={faShieldAlt} className="shield-right" />
                {this.props.round["team_2_short"]}
              </span> :
              this.props.round["team_2"] === 'cariri' && this.props.round["team_2_short"].length > 3 ?
                <span className="cariri-right">
                  <img src={require('../resources/images/logos/' + this.props.round["team_2"] + '.jpg')} className="logo-right" />
                  {this.props.round["team_2_short"]}
                </span> :
                <span className="known-team-right">
                  <img src={require('../resources/images/logos/' + this.props.round["team_2"] + '.jpg')} className="logo-right" />
                  {this.props.round["team_2_short"]}
                </span>
          }
        </div>
      </div>
    );
  }
}