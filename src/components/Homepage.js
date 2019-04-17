import React from "react";
import LoggedOut from "./LoggedOut";
import LoggedIn from "./LoggedIn";

const Homepage = props => {
  const { currentUser } = props;
  return (
    <div className="Homepage">
      {currentUser.isAuthenticated ? (
        <LoggedIn currentUser={currentUser} />
      ) : (
        <LoggedOut />
      )}
    </div>
  );
};

export default Homepage;
