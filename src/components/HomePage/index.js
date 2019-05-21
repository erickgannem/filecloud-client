import React from "react";
import LoggedOut from "../LoggedOut";
import LoggedInContainer from "../../containers/LoggedInContainer";

import "./style.css";

function Homepage(props) {
  const { currentUser } = props;
  return (
    <div className="Homepage">
      {currentUser.isAuthenticated && currentUser.user.isVerified ? (
        <LoggedInContainer />
      ) : (
        <LoggedOut />
      )}
    </div>
  );
}

export default Homepage;
