import { SET_LOADING, UNSET_LOADING } from "../actionTypes";

export default function isLoading(state = { isLoading: false }, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case UNSET_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
