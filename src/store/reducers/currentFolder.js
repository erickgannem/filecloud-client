import { GET_SINGLE_FOLDER } from "../actionTypes";

export default function currentFolder(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_FOLDER:
      return { ...action.folder };
    default:
      return state;
  }
}
