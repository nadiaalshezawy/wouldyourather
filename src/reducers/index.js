// put together state and actions
// return new state
import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";

export default combineReducers({
  authedUser,
  users,
  questions,
});
