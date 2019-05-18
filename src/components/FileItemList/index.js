import React from "react";
import { MdInsertDriveFile, MdMoreVert } from "react-icons/md";

import "./style.css";

function FileItem(props) {
  const { title, url } = props.file;
  return (
    <div className="file-item-container">
      <div className="file-item-header">
        <MdInsertDriveFile size={24} className="file-icon" />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="file-link"
        >
          <span className="file-name">{title}</span>
        </a>
      </div>
      <div className="file-more">
        <MdMoreVert size={24} className="more-icon" />
      </div>
    </div>
  );
}

export default FileItem;
