import React from 'react';

import * as ScorersAspirants from '../resources/data/topScorersAspirants.json';
import * as ScorersTitulars from '../resources/data/topScorersTitulars.json';

export default class TopScorer extends React.Component {
  calculateScorersOrder = (topScorers) => {
    const scorersOrdered = [];
    topScorers.map((scorer, index) => {
      if (scorersOrdered.length === 0) {
        scorersOrdered.push(scorer);
      } else {
        let position = 0;
        scorersOrdered.map((orderedScorer, subindex) => {
          if (scorer["goals"] >= orderedScorer["goals"]) {
            if (scorer["goals"] > orderedScorer["goals"]) {
              position = subindex > position ? position: subindex;
            } else {
              if (scorer["name"] < orderedScorer["name"]) {
                position = subindex > position ? position: subindex;
              } else {
                position = subindex > position ? position : subindex + 1;
              }
            }
          } else {
            position = subindex + 1;
          }
        });
        scorersOrdered.splice(position, 0, scorer);
      }
    });
    return scorersOrdered;
  }

  groupRanking = (topScorers) => {
    const scorersOrdered = this.calculateScorersOrder(topScorers);
    let scorersGrouped = [];
    let ranking = 1;
    let index = 0;

    scorersOrdered.map((scorer) => {
      if (scorersGrouped.length === 0) {
        scorer.ranking = ranking;
        scorersGrouped.push(scorer);
        index += 1;
      } else {
        if (scorer["goals"] === scorersGrouped[index - 1]["goals"]) {
          scorersGrouped.push(scorer);
          index += 1;
        } else {
          scorer.ranking = ++ranking;
          scorersGrouped.push(scorer);
          index += 1;
        }
      }
    });
    return scorersGrouped;
  }

  render() {
    return (
      <div className="top-scorers">
        <h2 className="scorers__title">Artilheiros</h2>
        <div className="scorers__subtitle d-flex justify-content-between">
          <span className="scorers__subtitle__player">Classificação</span>
          <span className="scorers__subtitle__goals">Gols</span>
        </div>
        {this.props.displayTitular && <ul className="list-group list-group-flush scorers">
          {this.groupRanking(Object.values(ScorersTitulars)[0]).map((scorer, index) => (
            <li className="list-group-item" key={index}>
              <span className="ranking">{scorer["ranking"]}</span>
              {
                scorer["ranking"] ?
                <span>
                  <img src={require('../resources/images/scorers/titulars/' + scorer["photo"] + '.jpg')} className="scorers__photo" />
                </span> :
                <span>
                  <img src={require('../resources/images/scorers/titulars/' + scorer["photo"] + '.jpg')} className="scorers__photo-empty" />
                </span>
              }
              <span><img src={require('../resources/images/logos/' + scorer["shield"] + '.jpg')} className="scorers__shield" /></span>
              <div className="scorers__name_position">
                <div className="scorers__name">{scorer["name"]}</div>
                <div className="scorers__position">{scorer["position"]}</div>
              </div>
              <span className="scorers_goals">{scorer["goals"]}</span>
            </li>
          ))}
        </ul>}
        {this.props.displayAspirant && <ul className="list-group list-group-flush scorers">
          {this.groupRanking(Object.values(ScorersAspirants)[0]).map((scorer, index) => (
            <li className="list-group-item" key={index}>
              <span className="ranking">{scorer["ranking"]}</span>
              {
                scorer["ranking"] ?
                <span>
                  <img src={require('../resources/images/scorers/aspirants/' + scorer["photo"] + '.jpg')} className="scorers__photo" />
                </span> :
                <span>
                  <img src={require('../resources/images/scorers/aspirants/' + scorer["photo"] + '.jpg')} className="scorers__photo-empty" />
                </span>
              }
              <span><img src={require('../resources/images/logos/' + scorer["shield"] + '.jpg')} className="scorers__shield" /></span>
              <div className="scorers__name_position">
                <div className="scorers__name">{scorer["name"]}</div>
                <div className="scorers__position">{scorer["position"]}</div>
              </div>
              <span className="scorers_goals">{scorer["goals"]}</span>
            </li>
          ))}
        </ul>}
      </div>
    );
  }
}