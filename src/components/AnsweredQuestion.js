import React from "react";
import { connect } from "react-redux";

class AnsweredQuestion extends React.Component {
  percentage(num1, num2) {
    console.log((num1 / (num1 + num2)) * 100);
    console.log(num2);
    if (num1 === 0) return num1;
    else return (num1 / (num1 + num2)) * 100;
  }

  render() {
    const { question } = this.props;
    const { optionOne, optionTwo } = question;
    return (
      <div class="ui form">
        <div class="grouped fields">
          <label>Would You Rather</label>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="example2" checked="checked" />
              <label>{optionOne.text}</label>
              <div class="ui progress">
                <div class="bar">
                  <div class="progress">{`  ${this.percentage(
                    optionOne.votes.length,
                    optionTwo.votes.length
                  )}%`}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="example2" />
              <label>{optionTwo.text}</label>
              <div class="ui progress">
                <div class="bar">
                  <div class="progress">{`  ${this.percentage(
                    optionTwo.votes.length,
                    optionOne.votes.length
                  )}%`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questions }, { id }) => {
  // console.log(state);
  const question = questions[id];

  console.log(question);
  return {
    question: question ? question : null,
    // author: question ? users[question.author] : null,
    // authedUser,
  };
};

export default connect(mapStateToProps)(AnsweredQuestion);
