import React, { Component } from "react";
import FolderItemList from "../FolderItemList";
import Modal from "../Modal";
import CleanScreen from "../CleanScreen";
import { fetchFolders } from "../../store/actions/folder";

import { MdCreateNewFolder } from "react-icons/md";

import socket from "socket.io-client";

import "./style.css";

export default class LoggedIn extends Component {
  state = {
    showModal: false,
    folders: []
  };
  modalHandler = e => {
    this.setState({ showModal: !this.state.showModal });
  };
  subscribeToUserConnection = () => {
    const { currentUser } = this.props;
    const io = socket("http://localhost:3030");
    io.emit("connectRoom", currentUser.user._id);
  };
  async componentDidMount() {
    const { currentUser, fetchFolders } = this.props;
    await fetchFolders(currentUser.user._id);
    this.setState({ folders: this.props.folders.all });
  }
  render() {
    const { user } = this.props.currentUser;
    const hasFolders = this.state.folders.map(folder => (
      <FolderItemList key={folder._id} folder={folder} user={user}>
        {folder.title}
      </FolderItemList>
    ));

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
          {!!user.folders.length ? hasFolders : <CleanScreen />}
        </div>
      </div>
    );
  }
}
