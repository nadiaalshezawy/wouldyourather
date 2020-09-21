import { saveQuestionAnswer, saveQuestion } from "../utils/api";
import { addQuestionToUser, addAnswerToUser } from "../actions/users";
import { showLoading, hideLoading } from "react-redux-loading";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";
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
    console.log("handle add question");
    console.log("option one text ", optionOneText);

    dispatch(showLoading());

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      })
      .then(() => dispatch(hideLoading));
  };
}
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addAnswerToQuestion(authedUser, qid, answer) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    authedUser,
    qid,
    answer,
  };
}
export function handleQuestionAnswer(authedUser, qid, answer) {
  console.log("handle question answer 1");
  console.log("authed ", authedUser);
  console.log("value ", answer);
  console.log("id ", qid);
  return (dispatch) => {
    //  const { authedUser } = getState();
    //  dispatch(showLoading());
    console.log("handle question answer 2");
    console.log("authed ", authedUser);
    console.log("value ", answer);
    console.log("id ", qid);

    return saveQuestionAnswer(authedUser, qid, answer)
      .then(() => dispatch(addAnswerToUser(authedUser, qid, answer)))
      .then(() => dispatch(addAnswerToQuestion(authedUser, qid, answer)))
      .then(() => dispatch(hideLoading()));
  };
}
/*
export function handleQuestionAnswer(authedUser, qid, answer) {
  console.log("handle question answer 1");
  console.log("authed ", authedUser);
  console.log("value ", answer);
  console.log("id ", qid);
  return (dispatch) => {
    //  const { authedUser } = getState();
    //  dispatch(showLoading());
    console.log("handle question answer 2");
    console.log("authed ", authedUser);
    console.log("value ", answer);
    console.log("id ", qid);

    return saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => dispatch(addAnswerToUser(authedUser, qid, answer)))
      .then(() => dispatch(addAnswerToQuestion(authedUser, qid, answer)))
      .then(() => dispatch(hideLoading()));
  };

  export function handleQuestionAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(addAnswerToUser(authedUser, qid, answer));
    dispatch(addAnswerToQuestion(authedUser, qid, answer));

    return saveQuestionAnswer(authedUser, qid, answer).catch((e) => {
      console.warn("Error in handleSaveQuestionAnswer:", e);
    });
  };
}
  */
