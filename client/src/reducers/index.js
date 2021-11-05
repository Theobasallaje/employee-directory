import { combineReducers } from "redux";
import buttonReducer from "./buttonReducer";
import formReducer from "./formReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  buttons: buttonReducer,
  forms: formReducer,
  search: searchReducer,
});
