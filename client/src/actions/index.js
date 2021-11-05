import { NAV_BUTTON, TITLE_PREFIX, EMPLOYEE_SEARCH } from "./types";

// Button actions
export const handleNavButton = (button) => {
  return {
    type: NAV_BUTTON,
    payload: button,
  };
};

// Form actions
export const handleFormTitlePrefix = (prefix) => {
  return {
    type: TITLE_PREFIX,
    payload: prefix,
  };
};

// Search
export const handleEmployeeSearch = (employees) => {
  return {
    type: EMPLOYEE_SEARCH,
    payload: employees,
  };
};
