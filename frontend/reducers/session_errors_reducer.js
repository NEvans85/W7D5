import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from "../actions/session_actions";

const initialState = [];

const SessionErrorsReducer = (state = initialState, action) => {
  Object.freeze(state);
  console.log(action);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
      const newState = [];
      return newState.concat(action.errors.responseJSON);
    default:
      return state;
  }
};

export default SessionErrorsReducer;
