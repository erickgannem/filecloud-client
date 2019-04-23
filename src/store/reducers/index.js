import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import loading from "./loading";
import folders from "./folders";

const rootReducer = combineReducers({
  currentUser,
  errors,
  loading,
  folders
});

export default rootReducer;
