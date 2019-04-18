import React from "react";
import { MdClose, MdInsertDriveFile } from "react-icons/md";

const FileItem = props => {
  const { title } = props.file;
  return (
    <div className="file-item-container">
      <div className="file-item-header">
        <MdInsertDriveFile size={24} />
        <a href="#" className="file-link">
          <span className="file-name">{title}</span>
        </a>
      </div>
      <MdClose size={24} color="red" />
    </div>
  );
};

export default FileItem;
