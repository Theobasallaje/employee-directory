import { TITLE_PREFIX } from "../actions/types";

const INTIAL_STATE = {
  formTitle: '',
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case TITLE_PREFIX:
      return { ...state, formTitle: action.payload };
    default:
      return state;
  }
};