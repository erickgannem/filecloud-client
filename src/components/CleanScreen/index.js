import React from "react";
import CleanIcon from "../../assets/clean.svg";
import "./style.css";

export default function CleanScreen() {
  return (
    <div className="clean-screen-container">
      <img src={CleanIcon} alt="it's clean here" className="clean-icon" />
      <h3 className="clean-text">It's empty here...</h3>
    </div>
  );
}
