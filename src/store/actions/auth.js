import { SET_CURRENT_USER } from "../actionTypes";
import { api, setAuthorizationToken } from "../../services/api";
import { addError, removeError } from "./error";
import { setLoading, unsetLoading } from "./loading";

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
});

export const logOutUser = () => dispatch => {
  dispatch(setLoading);
  setAuthorizationToken(false);
  localStorage.clear();
  dispatch(setCurrentUser({}));
  dispatch(unsetLoading);
  return;
};

export const authUser = (endpoint, data) => dispatch =>
  new Promise(async (resolve, reject) => {
    endpoint = endpoint.toLowerCase();
    try {
      dispatch(setLoading());

      const response = await api.post(`/api/users/${endpoint}`, data);
      const user = { ...response.data };
      localStorage.setItem("jwtToken", user.token);

      setAuthorizationToken(user.token);

      dispatch(setCurrentUser(user));
      dispatch(removeError());
      dispatch(unsetLoading());

      resolve();
    } catch (err) {
      dispatch(addError(err.message));
      dispatch(unsetLoading());
      reject();
    }
  });
