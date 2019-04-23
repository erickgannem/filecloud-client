import React, { Component } from "react";
import FolderItemList from "../FolderItemList";
import Modal from "../Modal";
import { MdCreateNewFolder } from "react-icons/md";

import "./style.css";

export default class LoggedIn extends Component {
  state = {
    showModal: false
  };
  modalHandler = e => {
    this.setState({ showModal: !this.state.showModal });
  };
  render() {
    const { user } = this.props.currentUser;
    const hasFolders = user.folders.map(folder => (
      <FolderItemList key={folder._id} folder={folder} user={user}>
        {folder.title}
      </FolderItemList>
    ));
    const hasNoFolders = <h2>It's empty here</h2>;
    return (
      <div className="folders-container">
        {this.state.showModal && (
          <Modal
            modalHandler={this.modalHandler.bind(this)}
            createFolder={this.props.createFolder}
            currentUser={this.props.currentUser}
          />
        )}
        <div className="folder-header">
          <p className="folder-name">
            <small>Root folder</small>
          </p>

          <div className="folder-options">
            <MdCreateNewFolder
              size={24}
              className="create-new-folder"
              onClick={this.modalHandler}
            />
          </div>
        </div>

        <div className="folders-list">
          {!!user.folders.length ? hasFolders : hasNoFolders}
        </div>
      </div>
    );
  }
}
