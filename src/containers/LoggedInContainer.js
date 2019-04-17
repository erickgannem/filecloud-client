import React, { Component } from "react";
import { connect } from "react-redux";
import LoggedIn from "../components/LoggedIn";

class LoggedInContainer extends Component {
  render() {
    const { currentUser } = this.props;
    return <LoggedIn currentUser={currentUser} />;
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});
export default connect(
  mapStateToProps,
  null
)(LoggedInContainer);
