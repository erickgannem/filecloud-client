import React, { useState } from "react";
import Logo from "../../assets/folder.svg";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logOutUser } from "../../store/actions/auth";
import { MdKeyboardArrowDown } from "react-icons/md";

import "./style.css";

function Navbar(props) {
  const [showMenu, menuHandler] = useState(false);

  const goHome = e => props.history.push("/");

  const handleLogOut = e => {
    props.logOutUser();
    props.history.push("/");
  };

  const { isAuthenticated, user } = props.currentUser;

  return (
    <nav>
      <div className="left-side">
        <div className="logo-wrapper" onClick={goHome}>
          <img src={Logo} alt="filecloud" width="auto" height="55px" />
          <h1 className="logo-title">
            <span className="half-logo-first">File</span>
            <span className="half-logo-second">Cloud</span>
          </h1>
        </div>
      </div>

      <div className="right-side">
        {isAuthenticated && user.isVerified ? (
          <div className="menu-container">
            <div
              className={showMenu ? "user-options active" : "user-options"}
              onClick={() => menuHandler(!showMenu)}
            >
              <p>
                Welcome, <strong>{user.username}</strong>
              </p>
              <MdKeyboardArrowDown size={22} />
            </div>
            {showMenu && (
              <div className="dropdown-menu">
                <span className="drop-item">My Account</span>
                <hr className="drop-separator" />
                <span className="drop-item logout" onClick={handleLogOut}>
                  Log Out
                </span>
              </div>
            )}
          </div>
        ) : (
          <ul className="nav-links">
            <li>
              <Link className="Nav-link signin" to="/users/signin">
                Sign In
              </Link>
            </li>
            <li>
              <Link className="Nav-link signup" to="/users/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default withRouter(
  connect(
    mapStateToProps,
    { logOutUser }
  )(Navbar)
);
