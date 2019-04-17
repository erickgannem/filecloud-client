import React, { Component } from "react";
import LoadingScreen from "./LoadingScreen";
import FileItem from "./FileItem";
import withAuth from "../hocs/withAuth";

class FolderContent extends Component {
  state = {
    files: []
  };
  async componentDidMount() {
    const { isAuthorized } = this.props;
    const { currentUser, match } = this.props;

    if (currentUser.isAuthenticated && isAuthorized) {
      const { _id } = currentUser.user;
      const { folder_id } = match.params;
      await this.props.onFetch(_id, folder_id);
      this.setState({ files: this.props.currentFolder.files });
    }
    return;
  }

  render() {
    const { isLoading } = this.props;
    const hasFiles = (
      <div>
        {this.state.files.map(file => (
          <FileItem key={file._id} file={file} />
        ))}
      </div>
    );
    const hasNoFiles = <h3>It's empty here</h3>;
    return isLoading ? (
      <LoadingScreen />
    ) : (
      <div className="files-container">
        <div className="file-list">
          {!!this.state.files.length > 0 ? hasFiles : hasNoFiles}
        </div>
      </div>
    );
  }
}

export default withAuth(FolderContent);
