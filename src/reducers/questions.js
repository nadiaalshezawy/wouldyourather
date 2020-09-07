import {
  RECEIVE_QUESTIONS,
  SAVE_QUESTION_ANSWER,
  ADD_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTION_ANSWER: {
      const { qid, authedUser, answer } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };
    }
    case ADD_QUESTION:
      //    const { question } = action;
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
}
