import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
  formatQuestion,
} from "./DATA.js";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => (
      {
        users,
        questions,
      },
      console.log(users),
      console.log(questions)
    )
  );
}
