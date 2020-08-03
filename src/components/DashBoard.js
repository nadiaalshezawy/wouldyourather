import React from "react";
import { connect } from "react-redux";
import Question from "./Question";

class DashBoard extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <div className="ui two column very relaxed grid">
          <div className="column">
            <div className="ui violet ribbon label">UnAnswered</div>
            <ul>
              {this.props.unansweredIds.map((question) => (
                <div key={question.id}>
                  <Question id={question.id} />
                </div>
              ))}
            </ul>
          </div>
          <div className="column">
            <div className="ui violet ribbon label">Answered</div>
            <ul>
              {this.props.answeredIds.map((question) => (
                <div key={question.id}>
                  <Question id={question.id} />
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="ui vertical divider"></div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const questionIds = Object.keys(users[authedUser].answers);
  console.log({ questionIds });

  const answeredIds = Object.values(questions)
    .filter((question) => questionIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unansweredIds = Object.values(questions)
    .filter((question) => !questionIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  console.log({ unansweredIds });
  return {
    answeredIds,
    unansweredIds,
    // questionIds: Object.keys(questions).sort(
    // (a, b) => questions[b].timestamp - questions[a].timestamp
  };
}
export default connect(mapStateToProps)(DashBoard);
