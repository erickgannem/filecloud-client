import React from "react";
import { MdFolder } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { withRouter } from "react-router-dom";

import "./style.css";

const FolderItemList = ({ history, folder, user }) => {
  const handleRedirecting = e => {
    history.push(`/users/${user._id}/folders/${folder._id}`);
  };
  return (
    <div className="folder-item" onClick={handleRedirecting}>
      <div className="folder-item-header">
        <MdFolder className="folder-icon" size={24} />
        <p className="folder-item-title">{folder.title}</p>
      </div>
      <div className="folder-settings">
        <MdSettings className="settings-icon" size={24} />
      </div>
    </div>
  );
};

export default withRouter(FolderItemList);
