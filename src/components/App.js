import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login";
import LeaderBoard from "./LeaderBoard";
import AddQuestion from "./AddQuestion";
import DashBoard from "./DashBoard";
import Error from "./Error";
import Question from "./Question";
import Header from "./Header";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
//import { _getUsers, _getQuestions } from "../utils/_DATA.js";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            {this.props.loading === true ? (
              <div>
                <Header />
                <Route path="/" component={Login} />
              </div>
            ) : (
              <div>
                (
                <Header />
                <Route path="/" exact component={DashBoard} />
                <Route path="/add" exact component={AddQuestion} />
                <Route path="/leaderboard" exact component={LeaderBoard} />
                <Route path="/question" exact component={Question} />
                <Route path="/error" exact component={Error} />
                <Route path="/login" exact component={Login} />
              </div>
            )}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
