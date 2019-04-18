import React from "react";
import { Link } from "react-router-dom";

const LoggedOut = props => (
  <div className="loggedOut">
    <h1>Don't have an account yet?</h1>
    <Link to="/users/signup" className="btn">
      Start today
    </Link>
  </div>
);

export default LoggedOut;
