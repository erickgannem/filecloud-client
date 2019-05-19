import React from "react";
import LoggedOut from "../LoggedOut";
import LoggedInContainer from "../../containers/LoggedInContainer";

import "./style.css";

function Homepage(props) {
  const { currentUser } = props;
  return (
    <div className="Homepage">
      {currentUser.isAuthenticated ? <LoggedInContainer /> : <LoggedOut />}
    </div>
  );
}

export default Homepage;
