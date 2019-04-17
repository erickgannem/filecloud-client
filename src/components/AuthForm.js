import React, { Component } from "react";

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
    const { signUp, errors } = this.props;
    return (
      <div className="AuthForm">
        {errors.message ? (
          <div className="error-popup">{errors.message}</div>
        ) : (
          ""
        )}
        <form onSubmit={this.handleSubmit}>
          <h2>{signUp ? "Sign up" : "Sign in"}</h2>
          {signUp && (
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={this.handleChange}
            />
          )}

          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button type="submit" className="btn" onClick={this.handleSubmit}>
            {this.props.textButton}
          </button>
        </form>
      </div>
    );
  }
}
