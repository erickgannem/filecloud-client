import React from "react";
import LoggedOut from "../LoggedOut";
import LoggedInContainer from "../../containers/LoggedInContainer";

import "./style.css";

const Homepage = props => {
  const {
    currentUser,
    createFolder,
    fetchFolders,
    folders,
    deleteFolder
  } = props;
  return (
    <div className="Homepage">
      {currentUser.isAuthenticated ? (
        <LoggedInContainer
          {...props}
          currentUser={currentUser}
          createFolder={createFolder}
          fetchFolders={fetchFolders}
          folders={folders}
          deleteFolder={deleteFolder}
        />
      ) : (
        <LoggedOut />
      )}
    </div>
  );
};

export default Homepage;
