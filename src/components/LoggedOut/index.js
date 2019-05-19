import React from "react";
import { Link } from "react-router-dom";

import { MdLock } from "react-icons/md";
import { MdFileUpload } from "react-icons/md";
import { MdViewCompact } from "react-icons/md";

import "./style.css";

function LoggedOut() {
  return (
    <div className="LoggedOut">
      <div className="welcome-wrapper">
        <p className="welcome-message">
          <strong>FileCloud</strong> is a cloud-based storaging service. Made
          with React.js on the frontend, React Native on the mobile and Node.js
          with Express and MongoDB on the backend.
        </p>
        <div className="feature-list">
          <div className="feature-item">
            <MdLock size={48} className="feature-icon" />
            <span>User authentication and authorization with jsonWebToken</span>
          </div>
          <div className="feature-item">
            <MdFileUpload size={48} className="feature-icon" />
            <span>Upload and download files with Express.js</span>
          </div>
          <div className="feature-item">
            <MdViewCompact size={48} className="feature-icon" />
            <span>Blazing fast and responsive layout with React.js </span>
          </div>
        </div>

        <Link to="/users/signup" className="btn">
          Feel free to try
        </Link>
      </div>
    </div>
  );
}

export default LoggedOut;
