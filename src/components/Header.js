import React from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { resetAuthedUser } from "../actions/authedUser";
class Header extends React.Component {
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch(resetAuthedUser());
    // console.log("logout");
  };
  render() {
    const { authedUser, author } = this.props;

    console.log("hello");
    console.log(author);
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          DashBoard
        </Link>
        <Link to="/leaderboard" className="item">
          LeaderBoard
        </Link>
        <Link to="/add" className="item">
          AddQuestion
        </Link>
        <div className="right menu">
          {authedUser === null ? (
            <Link to="/login" className="item">
              Login
            </Link>
          ) : (
            <div>
              {author.name}
              <img
                src={author.avatarURL}
                alt={`Avatar of ${author.name}`}
                className="ui avatar image"
              />
              <Button
                basic
                color="violet"
                content="Logout"
                onClick={this.handleClick.bind(this)}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  // console.log(state);
  // const question = questions[ownProps.match.params.question_id];
  //  const user = Object.keys(users[authedUser]);

  // console.log(question);
  return {
    //  user:authedUser ? users[auth] : null
    author: users[authedUser],
    authedUser,
  };
};

export default connect(mapStateToProps)(Header);
