import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import loading from "./loading";
import currentFolder from "./currentFolder";

const rootReducer = combineReducers({
  currentUser,
  errors,
  loading,
  currentFolder
});

export default rootReducer;
