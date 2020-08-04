import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
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
        <Link to="/login" className="item">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
