import React from "react";
import { MdClose, MdInsertDriveFile, MdMoreVert } from "react-icons/md";

import "./style.css";

const FileItem = props => {
  const { title } = props.file;
  return (
    <div className="file-item-container">
      <div className="file-item-header">
        <MdInsertDriveFile size={24} className="file-icon" />
        <a href="#" className="file-link">
          <span className="file-name">{title}</span>
        </a>
      </div>
      <div className="file-more">
        <MdMoreVert size={24} className="more-icon" />
      </div>
    </div>
  );
};

export default FileItem;
