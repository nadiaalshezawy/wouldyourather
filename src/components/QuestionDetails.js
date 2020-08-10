import React from "react";
import { connect } from "react-redux";
import AnsweredQuestion from "./AnsweredQuestion";
import UnAnsweredQuestion from "./UnAnsweredQuestion";

class QuestionDetails extends React.Component {
  percentage(num1, num2) {
    console.log((num1 / (num1 + num2)) * 100);
    console.log(num2);
    if (num1 === 0) return num1;
    else return (num1 / (num1 + num2)) * 100;
  }
  render() {
    const { question, author, authedUser } = this.props;
    const { name, avatarURL } = author;
    const { optionOne, optionTwo } = question;

    return (
      <div className="ui segment">
        <div className="ui top attached label"> Question Details</div>

        <img
          src={avatarURL}
          alt={`Avatar of ${name}`}
          className="ui centered medium circular image"
        />
        <a class="ui violet large label">{`Author : ${name} `}</a>

        <div>
          {optionOne.votes.includes(authedUser) ||
          optionTwo.votes.includes(authedUser) ? (
            <AnsweredQuestion id={question.id} />
          ) : (
            <UnAnsweredQuestion id={question.id} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, questions, users }, ownProps) => {
  // console.log(state);
  const question = questions[ownProps.match.params.question_id];

  console.log(question);
  return {
    question: question ? question : null,
    author: question ? users[question.author] : null,
    authedUser,
  };
};

export default connect(mapStateToProps)(QuestionDetails);
