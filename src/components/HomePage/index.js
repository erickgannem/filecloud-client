import React from "react";
import LoggedOut from "../LoggedOut";
import LoggedIn from "../LoggedIn";

import "./style.css";

const Homepage = props => {
  const { currentUser, createFolder } = props;
  return (
    <div className="Homepage">
      {currentUser.isAuthenticated ? (
        <LoggedIn
          {...props}
          currentUser={currentUser}
          createFolder={createFolder}
        />
      ) : (
        <LoggedOut />
      )}
    </div>
  );
};

export default Homepage;
