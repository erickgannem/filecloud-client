import React, { Component } from "react";
import { connect } from "react-redux";

import LoggedIn from "../../components/LoggedIn";

import {
  createFolderRequest,
  fetchFolders,
  deleteFolderRequest
} from "../../store/actions/folder";

function LoggedInContainer(props) {
  const { currentUser, loading, folders } = props;

  return (
    <LoggedIn
      currentUser={currentUser}
      isLoading={loading}
      createFolder={createFolderRequest}
      fetchFolders={fetchFolders}
      folders={folders}
      deleteFolder={deleteFolderRequest}
    />
  );
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  loading: state.loading,
  folders: state.folders
});

export default connect(
  mapStateToProps,
  { createFolderRequest, fetchFolders, deleteFolderRequest }
)(LoggedInContainer);
