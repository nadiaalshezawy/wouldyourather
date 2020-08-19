import { saveQuestionAnswer } from "../utils/api";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

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
