import { GET_SINGLE_FOLDER, CREATE_FOLDER } from "../actionTypes";

const INITIAL_STATE = { currentFolder: {}, newFolder: {} };

export default function folders(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_SINGLE_FOLDER:
      return { ...state, currentFolder: { ...action.folder } };
    case CREATE_FOLDER:
      return { ...state, newFolder: { ...action.newFolder } };
    default:
      return state;
  }
}
