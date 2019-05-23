import React, { Component } from "react";
import { MdFolder } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { withRouter } from "react-router-dom";

import "./style.css";

class FolderItemList extends Component {
  state = {
    showMenu: false
  };
  handleRedirecting = e => {
    const { history, folder, user } = this.props;

    history.push(`/users/${user._id}/folders/${folder._id}`);
  };
  optionsHandler = e => {
    e.stopPropagation();
    this.setState({ showMenu: !this.state.showMenu });
  };
  render() {
    return (
      <div className="folder-item" onClick={this.handleRedirecting}>
        <div className="folder-item-header">
          <MdFolder className="folder-icon" size={24} />
          <p className="folder-item-title">{this.props.folder.title}</p>
          <small>
            <strong>({this.props.folder.files.length} items)</strong>
          </small>
        </div>
        <div className="folder-settings" onClick={this.optionsHandler}>
          <MdSettings className="settings-icon" size={24} />
          {this.state.showMenu && (
            <div className="menu-list-options">
              <div
                className="list-option"
                id="delete-option"
                onClick={this.props.deleteFolder}
              >
                Delete
              </div>
              <div className="list-option" id="rename-option">
                Rename
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(FolderItemList);
