import React from "react";
import { MdFolder } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { withRouter } from "react-router-dom";

const FolderItemList = ({ history, folder }) => {
  const handleRedirecting = e => {
    history.push(`/folders/${folder._id}`);
  };
  return (
    <div className="folder-item" onClick={handleRedirecting}>
      <div className="folder-item-identifier">
        <MdFolder color="#647A86" />
        <p className="folder-item-title">{folder.title}</p>
      </div>
      <MdSettings color="#647A86" className="settings-icon" />
    </div>
  );
};

export default withRouter(FolderItemList);
