import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";
const INITIAL_STATE = {
  message: null
};

export default function errors(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, message: action.error };
    case REMOVE_ERROR:
      return { ...state, message: null };
    default:
      return state;
  }
}
