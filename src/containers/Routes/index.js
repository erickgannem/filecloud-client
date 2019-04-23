import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "../../components/HomePage";
import AuthForm from "../../components/AuthForm";
import FolderContent from "../../components/FolderContent";

import { authUser } from "../../store/actions/auth";
import { fetchSingleFolder } from "../../store/actions/folder";
import { createFolderRequest } from "../../store/actions/folder";

const Routes = props => {
  const {
    authUser,
    currentUser,
    folders,
    errors,
    fetchSingleFolder,
    loading,
    createFolderRequest
  } = props;
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={props => (
          <HomePage
            {...props}
            currentUser={currentUser}
            isLoading={loading}
            createFolder={createFolderRequest}
          />
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
            isLoading={loading}
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
            isLoading={loading}
          />
        )}
      />
      <Route
        exact
        path="/users/:user_id/folders/:folder_id"
        render={props => (
          <FolderContent
            {...props}
            onFetch={fetchSingleFolder}
            currentUser={currentUser}
            currentFolder={folders.currentFolder}
            isLoading={loading}
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
  folders: state.folders,
  loading: state.loading
});

export default connect(
  mapStateToProps,
  { authUser, fetchSingleFolder, createFolderRequest }
)(Routes);