import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import QuestionDetails from "./QuestionDetails";
import { formatQuestion, formatDate } from "../utils/helpers";

//<span>{`${name} ask  would you rather \n ${optionOne} or ${optionTwo}`}</span>
class Question extends React.Component {
  render() {
    const { question, author, authedUser } = this.props;

    if (question === null) {
      return <p> This Question dosen't existed</p>;
    }
    const { optionOne, optionTwo, timestamp, id } = question;
    const { name, avatarURL } = author;
    console.log(this.props);
    return (
      <div>
        <br></br>
        <div className="ui segment">
          <img
            src={avatarURL}
            alt={`Avatar of ${name}`}
            className="ui avatar image"
          />
          <span>{name}</span>
          <div>{formatDate(timestamp)}</div>
          <div className="ui secondary segment">{`Would you rather ?${optionOne.text} or ${optionTwo.text}`}</div>

          <div>
            <Link to={`/questions/${id}`} className="ui button primary">
              view
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  //console.log({ id });
  const question = questions[id];

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
