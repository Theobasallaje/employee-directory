import { EMPLOYEE_SEARCH } from "../actions/types";

const INTIAL_STATE = {
  employeeSearch: [],
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_SEARCH:
      return {
        ...state,
        employeeSearch: action.payload,
      };
    default:
      return state;
  }
};
