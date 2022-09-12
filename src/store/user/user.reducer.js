import { USER_ACTION_TYPES } from "./user.types";
const INITIAL_STATE = { currentUser: null };

export const userReducer = (state = INITIAL_STATE, action) => {
  //destructuring
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      //action pass every reducer, so if nothing change, pass the previous state
      return state;
  }
};
