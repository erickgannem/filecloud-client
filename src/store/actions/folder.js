import {
  SET_CURRENT_FOLDER,
  CREATE_FOLDER,
  GET_FOLDERS,
  DELETE_FOLDER
} from "../actionTypes";
import { addError, removeError } from "../actions/error";
import { setLoading, unsetLoading } from "../actions/loading";
import { api } from "../../services/api";

export const deleteFolder = folderId => ({
  type: DELETE_FOLDER,
  folderId
});
export const deleteFolderRequest = (userId, folderId) => dispatch =>
  new Promise(async (resolve, reject) => {
    try {
      dispatch(setLoading());
      const response = await api.delete(
        `/api/users/${userId}/folders/${folderId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.jwtToken}`
          }
        }
      );
      dispatch(unsetLoading());
      dispatch(removeError());
      dispatch(deleteFolder(response.data._id));
      resolve();
    } catch (err) {
      dispatch(addError(err.response.data.message));
      reject();
    }
  });

export const setCurrentFolder = folder => ({
  type: SET_CURRENT_FOLDER,
  folder
});
export const fetchSingleFolder = (userId, folderId) => dispatch =>
  new Promise(async (resolve, reject) => {
    try {
      dispatch(setLoading());
      const response = await api.get(
        `/api/users/${userId}/folders/${folderId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.jwtToken}`
          }
        }
      );
      dispatch(unsetLoading());
      dispatch(removeError());
      dispatch(setCurrentFolder(response.data));
      resolve();
    } catch (err) {
      dispatch(addError(err.response.data.message));
      reject();
    }
  });

export const createFolder = newFolder => ({
  type: CREATE_FOLDER,
  newFolder
});
export const createFolderRequest = (folderTitle, user) => dispatch =>
  new Promise(async (resolve, reject) => {
    try {
      dispatch(setLoading());
      const response = await api.post(
        `/api/users/${user._id}/folders`,
        {
          title: folderTitle
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }
      );
      dispatch(unsetLoading());
      dispatch(removeError());
      dispatch(createFolder(response.data));
      resolve();
    } catch (err) {
      dispatch(addError(err.response.data.message));
      reject();
    }
  });

export const getFolders = folders => ({
  type: GET_FOLDERS,
  folders
});
export const fetchFolders = userId => dispatch =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await api.get(`/api/users/${userId}/folders`, {
        headers: {
          Authorization: `Bearer ${localStorage.jwtToken}`
        }
      });
      dispatch(getFolders(response.data));
      resolve();
    } catch (err) {
      dispatch(addError(err.response.data.message));
      reject();
    }
  });
