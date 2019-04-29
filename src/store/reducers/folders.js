import {
  SET_CURRENT_FOLDER,
  CREATE_FOLDER,
  GET_FOLDERS,
  DELETE_FOLDER
} from "../actionTypes";

const INITIAL_STATE = { all: [], currentFolder: {} };

export default function folders(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CURRENT_FOLDER:
      return { ...state, currentFolder: { ...action.folder } };
    case CREATE_FOLDER:
      return { ...state };
    case GET_FOLDERS:
      return { ...state, all: [...action.folders] };
    case DELETE_FOLDER:
      return {
        ...state,
        all: state.all.filter(folder => folder._id !== action.folderId)
      };
    default:
      return state;
  }
}
