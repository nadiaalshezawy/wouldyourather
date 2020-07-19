import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        DashBoard
      </Link>
      <div className="right menu">
        <Link to="/leaderboard" className="item">
          LeaderBoard
        </Link>
      </div>
    </div>
  );
};

export default Header;
