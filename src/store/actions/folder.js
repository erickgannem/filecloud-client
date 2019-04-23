import { GET_SINGLE_FOLDER, CREATE_FOLDER } from "../actionTypes";
import { addError, removeError } from "../actions/error";
import { setLoading, unsetLoading } from "../actions/loading";
import { api } from "../../services/api";

export const getSingleFolder = folder => ({
  type: GET_SINGLE_FOLDER,
  folder
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
      dispatch(addError(err.message));
      reject();
    }
  });
export const fetchSingleFolder = (user_id, folder_id) => dispatch =>
  new Promise(async (resolve, reject) => {
    try {
      dispatch(setLoading());
      const response = await api.get(
        `/api/users/${user_id}/folders/${folder_id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.jwtToken}`
          }
        }
      );
      dispatch(unsetLoading());
      dispatch(removeError());
      dispatch(getSingleFolder(response.data));
      resolve();
    } catch (err) {
      dispatch(addError(err.message));
      reject();
    }
  });
