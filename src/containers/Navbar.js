import React, { Component } from "react";
import Logo from "../assets/logo.png";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logOutUser } from "../store/actions/auth";

class Navbar extends Component {
  goHome = e => this.props.history.push("/");
  handleLogOut = e => {
    this.props.logOutUser();
    this.props.history.push("/");
  };
  render() {
    const { isAuthenticated, user } = this.props.currentUser;
    return (
      <nav>
        <div className="left-side">
          <img
            src={Logo}
            alt="filecloud"
            width="auto"
            height="50px"
            onClick={this.goHome}
          />
        </div>

        <div className="right-side">
          {isAuthenticated ? (
            <div className="user-options">
              <h4>Welcome, {user.username}</h4>
              <small onClick={this.handleLogOut}>(Logout)</small>
            </div>
          ) : (
            <ul className="nav-links">
              <li>
                <Link className="Nav-link" to="/users/signin">
                  Sign In
                </Link>
              </li>
              <li>
                <Link className="Nav-link" to="/users/signup">
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
