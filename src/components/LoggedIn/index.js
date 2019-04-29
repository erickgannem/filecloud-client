import React, { Component } from "react";
import FolderItemList from "../FolderItemList";
import Modal from "../Modal";
import CleanScreen from "../CleanScreen";
import { MdCreateNewFolder } from "react-icons/md";

import socket from "socket.io-client";

import "./style.css";

export default class LoggedIn extends Component {
  state = {
    showModal: false,
    folders: []
  };
  foldersHandler = data => {
    this.setState(prevState => ({
      folders: [...prevState.folders, data]
    }));
  };
  modalHandler = e => {
    this.setState({ showModal: !this.state.showModal });
  };

  // Socket.io
  io = socket("http://localhost:3030");
  susbscribeToFolderCreation = () => {
    this.io.emit("userSession", this.props.currentUser.user._id);
    this.io.on("folder", data => this.foldersHandler(data));
  };
  // -- Socket.io --

  async componentDidMount() {
    const { currentUser, fetchFolders } = this.props;

    this.susbscribeToFolderCreation();
    await fetchFolders(currentUser.user._id);
    this.setState({ folders: this.props.folders.all });
  }
  componentWillUnmount() {
    this.io.removeAllListeners();
  }
  render() {
    const { user } = this.props.currentUser;
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
          {!!this.state.folders ? (
            this.state.folders.map(folder => (
              <FolderItemList key={folder._id} folder={folder} user={user}>
                {folder.title}
              </FolderItemList>
            ))
          ) : (
            <CleanScreen />
          )}
        </div>
      </div>
    );
  }
}
