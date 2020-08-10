import React from "react";
import { connect } from "react-redux";

class UnAnsweredQuestion extends React.Component {
  render() {
    const { question } = this.props;
    const { optionOne, optionTwo } = question;
    return (
      <div>
        <div>not include</div>
        <div class="ui form">
          <div class="grouped fields">
            <label>Would You Rather</label>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="example2" />
                <label>{optionOne.text}</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="example2" />
                <label>{optionTwo.text}</label>
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

export default connect(mapStateToProps)(UnAnsweredQuestion);
