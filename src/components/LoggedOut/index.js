import React from "react";
import { Link } from "react-router-dom";

import Padlock from "../../assets/padlock.svg";
import File from "../../assets/pdf.svg";
import Layout from "../../assets/web-design.svg";

import "./style.css";

const LoggedOut = props => (
  <div className="LoggedOut">
    <div className="welcome-wrapper">
      <p className="welcome-message">
        <strong>Filecloud</strong> is a cloud-based storaging service. Made with
        React.js on the frontend, React Native on the mobile and Node.js with
        Express and MongoDB on the backend.
      </p>
      <div className="feature-list">
        <div className="feature-item">
          <img src={Padlock} width={48} height={48} alt="security" />
          <span>User authentication and authorization with jsonWebToken</span>
        </div>
        <div className="feature-item">
          <img src={File} width={48} height={48} alt="security" />
          <span>Upload and download files with Express.js</span>
        </div>
        <div className="feature-item">
          <img src={Layout} width={48} height={48} alt="security" />
          <span>Blazing fast and responsive layout with React.js </span>
        </div>
      </div>

      <Link to="/users/signup" className="btn">
        Feel free to try
      </Link>
    </div>
  </div>
);

export default LoggedOut;
