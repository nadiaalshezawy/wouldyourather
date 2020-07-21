import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login";
import LeaderBoard from "./LeaderBoard";
import AddQuestion from "./AddQuestion";
import DashBoard from "./DashBoard";
import Error from "./Error";
import Question from "./Question";
import Header from "./Header";
//import { _getUsers, _getQuestions } from "../utils/_DATA.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    //console.log(users);
  }

  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={DashBoard} />
            <Route path="/add" exact component={AddQuestion} />
            <Route path="/leaderboard" exact component={LeaderBoard} />
            <Route path="/question" exact component={Question} />
            <Route path="/error" exact component={Error} />
            <Route path="/login" exact component={Login} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
