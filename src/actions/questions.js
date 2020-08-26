import { saveQuestionAnswer, saveQuestion } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading));
  };
}
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function saveAnswer({ qid, authedUser, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    qid,
    authedUser,
    answer,
  };
}

export function handleQuestionAnswer(info) {
  return (dispatch) => {
    dispatch(saveAnswer(info));

    return saveQuestionAnswer(info).catch((e) => {
      console.warn("Error in handelQuestionAnswer:", e);
      dispatch(saveAnswer(info));
      alert("The was an error svaing question Answer.Try again.");
    });
  };
}
