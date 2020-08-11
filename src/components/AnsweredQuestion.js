import React from "react";
import { connect } from "react-redux";
import { Progress, Segment } from "semantic-ui-react";

class AnsweredQuestion extends React.Component {
  percentage(num1, num2) {
    console.log((num1 / (num1 + num2)) * 100);
    console.log(num2);
    if (num1 === 0) return num1;
    else return (num1 / (num1 + num2)) * 100;
  }

  render() {
    const { question, authedUser } = this.props;
    const { optionOne, optionTwo } = question;
    var sum = optionOne.votes.length + optionTwo.votes.length;

    return (
      <div class="ui list">
        <label>Would You Rather</label>

        <div class="item">
          <Segment>
            {`${optionOne.text} (${optionOne.votes.length} of ${sum}) votes `}

            {optionOne.votes.includes(authedUser) ? (
              <i class="thumbs up icon"></i>
            ) : null}

            <Progress
              percent={this.percentage(
                optionOne.votes.length,
                optionTwo.votes.length
              )}
              progress
              color="violet"
            ></Progress>
          </Segment>
        </div>
        <div class="item">
          <Segment>
            {`${optionTwo.text} (${optionTwo.votes.length} of ${sum}) votes `}
            {optionTwo.votes.includes(authedUser) ? (
              <i class="thumbs up icon"></i>
            ) : null}

            <Progress
              percent={this.percentage(
                optionTwo.votes.length,
                optionOne.votes.length
              )}
              progress
              color="violet"
            ></Progress>
          </Segment>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, questions }, { id }) => {
  // console.log(state);
  const question = questions[id];

  console.log(question);
  return {
    question: question ? question : null,
    // author: question ? users[question.author] : null,
    authedUser,
  };
};

export default connect(mapStateToProps)(AnsweredQuestion);

/*
<div class="ui progress">
              <div class="bar">
                <div class="progress">{`  ${this.percentage(
                  optionOne.votes.length,
                  optionTwo.votes.length
                )}%`}</div>
              </div>
            </div>
            */
