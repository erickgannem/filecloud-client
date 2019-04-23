import React, { Component } from "react";

import "./style.css";

export default class Modal extends Component {
  state = {
    folderTitle: ""
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { createFolder } = this.props;
    const { user } = this.props.currentUser;
    try {
      await createFolder(this.state.folderTitle, user);
      this.props.modalHandler();
    } catch (err) {
      return err;
    }
  };
  render() {
    const { modalHandler } = this.props;
    return (
      <div className="modal-wrapper">
        <div className="modal-itself">
          <p className="modal-title">Create New Folder</p>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="New Folder Title"
              className="title-input"
              onChange={e => this.setState({ folderTitle: e.target.value })}
              required
            />
            <div className="modal-buttons">
              <button
                className="btn modal-button cancel-button"
                onClick={modalHandler}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn modal-button create-button"
                onClick={this.handleSubmit}
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
