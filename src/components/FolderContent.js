import React, { Component } from "react";

class FolderContent extends Component {
  state = {
    files: []
  };
  async componentDidMount() {
    const { _id } = this.props.currentUser.user;
    const { folder_id } = this.props.match.params;
    await this.props.onFetch(_id, folder_id);
    this.setState({ files: this.props.currentFolder.files });
  }

  render() {
    const hasFiles = (
      <ul>
        {this.state.files.map(file => (
          <li key={file._id}>{file.title}</li>
        ))}
      </ul>
    );
    const hasNoFiles = <h3>It's empty here</h3>;
    return (
      <div className="folders-container">
        <div className="folders-list">
          {!!this.state.files.length > 0 ? hasFiles : hasNoFiles}
        </div>
      </div>
    );
  }
}

export default FolderContent;
