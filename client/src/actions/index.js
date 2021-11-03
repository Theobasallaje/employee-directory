import {
    NAV_BUTTON,
  } from "./types";
  
  // Button actions
  export const handleNavButton = (button) => {
    return {
      type: NAV_BUTTON,
      payload: button,
    };
  };
  
//   export const changeEditor = (editorState) => async (dispatch, getState) => {
//     console.log("editorState: ", editorState);
//     dispatch({ type: EDITOR_CHANGE, payload: { editorState } });
    
    // console.log('Get Plain Text editorState AFTER 2nd getState: ', state.textEditor.editorState.getCurrentContent().getPlainText())
//   };
  
  // End of Editor actions