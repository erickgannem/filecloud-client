import React, { Component } from "react";
import { connect } from "react-redux";

export default function withAuth(ComponentToBeRendered) {
  class Authenticate extends Component {
    checkAuthorization = () =>
      this.props.currentUser.user._id === this.props.match.params.user_id;

    componentWillMount() {
      const { currentUser } = this.props;
      const isAuthorized = this.checkAuthorization();

      if (!currentUser.isAuthenticated) {
        return this.props.history.push("/users/signin");
      }
      if (!isAuthorized) {
        return this.props.history.push("/");
      }
    }
    render() {
      return (
        <ComponentToBeRendered
          {...this.props}
          isAuthorized={this.checkAuthorization()}
        />
      );
    }
  }
  const mapStateToProps = state => ({
    currentUser: state.currentUser
  });
  return connect(
    mapStateToProps,
    null
  )(Authenticate);
}
