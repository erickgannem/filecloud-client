import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";
import { fetchSingleFolder } from "../store/actions/folder";
import FolderContent from "../components/FolderContent";

const Routes = props => {
  const {
    authUser,
    currentUser,
    currentFolder,
    errors,
    fetchSingleFolder
  } = props;
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={props => (
          <Homepage {...props} isAuthenticated={currentUser.isAuthenticated} />
        )}
      />
      <Route
        exact
        path="/users/signin"
        render={props => (
          <AuthForm
            {...props}
            textButton="Sign me in"
            onAuth={authUser}
            errors={errors}
          />
        )}
      />
      <Route
        exact
        path="/users/signup"
        render={props => (
          <AuthForm
            {...props}
            textButton="Sign me up"
            signUp
            onAuth={authUser}
            errors={errors}
          />
        )}
      />
      <Route
        exact
        path="/folders/:folder_id"
        render={props => (
          <FolderContent
            {...props}
            onFetch={fetchSingleFolder}
            currentUser={currentUser}
            currentFolder={currentFolder}
          />
        )}
      />
      } />
    </Switch>
  );
};

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  errors: state.errors,
  currentFolder: state.currentFolder
});

export default connect(
  mapStateToProps,
  { authUser, fetchSingleFolder }
)(Routes);
