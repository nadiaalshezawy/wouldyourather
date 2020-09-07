import React from "react";
import { connect } from "react-redux";
import Question from "./Question";

class DashBoard extends React.Component {
  state = {
    UnAnswered: true,
  };

  render() {
    return (
      <div className="ui segment">
        <button
          className="ui left violet attached button"
          onClick={() => this.setState({ UnAnswered: true })}
        >
          UnAnswered
        </button>
        <button
          className="right violet attached ui button"
          onClick={() => this.setState({ UnAnswered: false })}
        >
          Answered
        </button>

        <div className="ui  column very relaxed grid">
          {this.state.UnAnswered ? (
            <div className="column">
              <ul>
                {this.props.unansweredIds.map((question) => (
                  <div key={question.id}>
                    <Question id={question.id} />
                  </div>
                ))}
              </ul>
            </div>
          ) : (
            <div className="column">
              <ul>
                {this.props.answeredIds.map((question) => (
                  <div key={question.id}>
                    <Question id={question.id} />
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const questionIds = Object.keys(users[authedUser].answers);

  const answeredIds = Object.values(questions)
    .filter((question) => questionIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unansweredIds = Object.values(questions)
    .filter((question) => !questionIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    answeredIds,
    unansweredIds,
  };
}
export default connect(mapStateToProps)(DashBoard);
