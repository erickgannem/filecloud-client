import React, { Component } from "react";
import { connect } from "react-redux";

// Cualquier usuario logado es capaz de ver contenido de otro usuario mediante alteración de la url.
// Nota para correción posterior.
export default function withAuth(ComponentToBeRendered) {
  class Authenticate extends Component {
    componentWillMount() {
      const { isAuthenticated } = this.props;
      if (!isAuthenticated) {
        return this.props.history.push("/users/signin");
      }
    }
    render() {
      return <ComponentToBeRendered {...this.props} />;
    }
  }
  const mapStateToProps = state => ({
    isAuthenticated: state.currentUser.isAuthenticated
  });
  return connect(
    mapStateToProps,
    null
  )(Authenticate);
}
