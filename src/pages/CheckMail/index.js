import React from "react";
import { MdMail } from "react-icons/md";

import "./index.css";

export default function CheckMail(props) {
  return (
    <div className="check-mail-container">
      <MdMail className="message-icon" size={72} />
      <h3 className="message-text">
        A verification token has been sent to your mail. Please check it out :)
      </h3>
      <button className="button" onClick={() => props.history.push("/")}>
        Go to homepage
      </button>
    </div>
  );
}
