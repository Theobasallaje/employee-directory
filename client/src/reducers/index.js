import { combineReducers } from "redux";
import buttonReducer from "./buttonReducer";
import formReducer from "./formReducer";

export default combineReducers({
  buttons: buttonReducer,
  forms: formReducer,
});
