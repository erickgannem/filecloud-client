import React, { Component } from "react";
import Logo from "../../assets/folder.svg";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logOutUser } from "../../store/actions/auth";
import { MdKeyboardArrowDown } from "react-icons/md";

import "./style.css";

class Navbar extends Component {
  state = {
    showMenu: false
  };
  goHome = e => this.props.history.push("/");
  handleLogOut = e => {
    this.props.logOutUser();
    this.props.history.push("/");
  };
  render() {
    const { isAuthenticated, user } = this.props.currentUser;
    const { showMenu } = this.state;
    return (
      <nav>
        <div className="left-side">
          <div className="logo-wrapper" onClick={this.goHome}>
            <img src={Logo} alt="filecloud" width="auto" height="55px" />
            <h1 className="logo-title">
              <span className="half-logo-first">File</span>
              <span className="half-logo-second">Cloud</span>
            </h1>
          </div>
        </div>

        <div className="right-side">
          {isAuthenticated ? (
            <div className="menu-container">
              <div
                className={showMenu ? "user-options active" : "user-options"}
                onClick={e => this.setState({ showMenu: !showMenu })}
              >
                <p>
                  Welcome, <strong>{user.username}</strong>
                </p>
                <MdKeyboardArrowDown size={22} />
              </div>
              {this.state.showMenu && (
                <div className="dropdown-menu">
                  <span className="drop-item">My Account</span>
                  <hr className="drop-separator" />
                  <span
                    className="drop-item logout"
                    onClick={this.handleLogOut}
                  >
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
