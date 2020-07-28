import React from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
//<span>{`${name} ask  would you rather \n ${optionOne} or ${optionTwo}`}</span>
class Question extends React.Component {
  render() {
    const { question, author, authedUser } = this.props;

    if (question === null) {
      return <p> This Question dosen't existed</p>;
    }
    const { optionOne, optionTwo, timestamp } = question;
    const { name, avatarURL } = author;
    console.log(this.props);
    return (
      <div class="ui segment">
        <div class="ui form">
          <div class="grouped fields">
            <p>
              <img
                src={avatarURL}
                alt={`Avatar of ${name}`}
                className="ui avatar image"
              />

              <label>Would You Rather?</label>
            </p>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="example2" checked="checked"></input>
                <label>{optionOne.text}</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="example2" checked="checked"></input>
                <label>{optionTwo.text}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  //console.log({ id });
  const question = questions[id];
  // console.log({users[{id}]});
  //  console.log({ question });

  return {
    question: question ? question : null,
    author: question ? users[question.author] : null,
    authedUser,
  };
}
export default connect(mapStateToProps)(Question);

//question: question
//? formatQuestion(question, users[question.author], authedUser)
//: null,
