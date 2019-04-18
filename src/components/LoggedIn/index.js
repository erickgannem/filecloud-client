import React, { Component } from "react";
import FolderItemList from "../FolderItemList";

export default class LoggedIn extends Component {
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
        <h1>{user.username}'s folders</h1>
        <div className="folders-list">
          {!!user.folders.length ? hasFolders : hasNoFolders}
        </div>
      </div>
    );
  }
}
