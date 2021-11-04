import {
    NAV_BUTTON,
    TITLE_PREFIX
  } from "./types";
  
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
  
  
//   export const changeEditor = (editorState) => async (dispatch, getState) => {
//     console.log("editorState: ", editorState);
//     dispatch({ type: EDITOR_CHANGE, payload: { editorState } });
    
    // console.log('Get Plain Text editorState AFTER 2nd getState: ', state.textEditor.editorState.getCurrentContent().getPlainText())
//   };
  
  // End of Editor actions