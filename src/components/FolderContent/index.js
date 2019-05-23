import React, { Component } from "react";
import LoadingScreen from "../LoadingScreen";
import FileItemList from "../FileItemList";
import CleanScreen from "../CleanScreen";
import StyledDropzone from "../StyledDropzone";

import withAuth from "../../hocs/withAuth";

import { api } from "../../services/api";

import { MdArrowBack } from "react-icons/md";
import "./style.css";

class FolderContent extends Component {
  state = {
    files: []
  };
  async componentDidMount() {
    const { isAuthorized, currentUser, match, onFetch } = this.props;

    if (currentUser.isAuthenticated && isAuthorized) {
      const { _id } = currentUser.user;
      const { folder_id } = match.params;

      await onFetch(_id, folder_id);
      this.setState({ files: this.props.currentFolder.files });
    }
    return;
  }
  componentWillUnmount() {
    const { dispatch, setCurrentFolder } = this.props;
    dispatch(setCurrentFolder({}));
  }
  handleUpload = files => {
    const { _id: userId, token } = this.props.currentUser.user;
    const { _id: folderId } = this.props.currentFolder;

    files.forEach(file => {
      const data = new FormData();
      data.append("file", file);
      api.post(`/api/users/${userId}/folders/${folderId}/files`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    });
    console.log("uploaded");
  };
  render() {
    const { isLoading, currentFolder } = this.props;
    const hasFiles = (
      <div>
        {this.state.files.map(file => (
          <FileItemList key={file._id} file={file} />
        ))}
      </div>
    );

    return isLoading ? (
      <LoadingScreen />
    ) : (
      <div className="files-container">
        <div className="files-header">
          <div className="file-name-wrapper">
            <div
              className="arrow-back-icon-wrapper"
              onClick={this.props.history.goBack}
            >
              <MdArrowBack size={24} className="arrow-back-icon" />
            </div>
            <small className="file-name">{currentFolder.title}</small>
          </div>
        </div>
        <StyledDropzone onDrop={this.handleUpload} />
        <div className="file-list">
          {!!this.state.files.length > 0 ? hasFiles : <CleanScreen />}
        </div>
      </div>
    );
  }
}

export default withAuth(FolderContent);
