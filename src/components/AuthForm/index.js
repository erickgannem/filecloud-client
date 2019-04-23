import React, { Component } from "react";
import LoadingScreen from "../LoadingScreen";

import "./style.css";

export default class AuthForm extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { signUp, history, onAuth } = this.props;
    const endpoint = signUp ? "signup" : "signin";
    try {
      await onAuth(endpoint, this.state);
      history.push("/");
    } catch (err) {
      return err;
    }
  };
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { signUp, errors, isLoading } = this.props;
    return isLoading ? (
      <LoadingScreen />
    ) : (
      <div className="AuthForm">
        {errors.message ? (
          <div className="error-popup">{errors.message}</div>
        ) : (
          ""
        )}
        <form onSubmit={this.handleSubmit}>
          <h2 className="form-title">{signUp ? "Sign Up" : "Sign In"}</h2>
          {signUp && (
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={this.handleChange}
              className="keyboard-input"
              value={this.state.username}
            />
          )}

          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            onChange={this.handleChange}
            className="keyboard-input"
            value={this.state.email}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={this.handleChange}
            className="keyboard-input"
          />
          <button
            type="submit"
            className="btn submit-btn"
            onClick={this.handleSubmit}
          >
            {this.props.textButton}
          </button>
          {!signUp && (
            <small>
              <a href="#" className="forgot">
                Forgot your password?
              </a>
            </small>
          )}
        </form>
      </div>
    );
  }
}
