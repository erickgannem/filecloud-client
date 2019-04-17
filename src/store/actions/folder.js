import { GET_SINGLE_FOLDER } from "../actionTypes";
import { addError, removeError } from "../actions/error";
import { setLoading, unsetLoading } from "../actions/loading";
import { api } from "../../services/api";

export const getSingleFolder = folder => ({
  type: GET_SINGLE_FOLDER,
  folder
});

export const fetchSingleFolder = (user_id, folder_id) => dispatch =>
  new Promise(async (resolve, reject) => {
    try {
      dispatch(setLoading());
      // Revisar por qué necesito configurar el header nuevamente

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
