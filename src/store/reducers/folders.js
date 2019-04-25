import { SET_CURRENT_FOLDER, CREATE_FOLDER, GET_FOLDERS } from "../actionTypes";

const INITIAL_STATE = { all: [], currentFolder: {} };

export default function folders(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CURRENT_FOLDER:
      return { ...state, currentFolder: { ...action.folder } };
    case CREATE_FOLDER:
      return { ...state };
    case GET_FOLDERS:
      return { ...state, all: [...action.folders] };
    default:
      return state;
  }
}
