import React from "react";
import LoggedOut from "./LoggedOut";
import LoggedInContainer from "../containers/LoggedInContainer";

const Homepage = props => (
  <div className="Homepage">
    {props.isAuthenticated ? <LoggedInContainer /> : <LoggedOut />}
  </div>
);

export default Homepage;
