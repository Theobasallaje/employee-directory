import { NAV_BUTTON } from "../actions/types";

const INTIAL_STATE = {
  navButton: 'add',
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case NAV_BUTTON:
      return { ...state, navButton: action.payload };
    default:
      return state;
  }
};