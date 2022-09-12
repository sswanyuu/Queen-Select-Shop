import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";
import {
  // signOutUser,
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";
//as the actual value to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};
const userReducer = (state, action) => {
  //destructuring
  const { type, payload } = action;
  console.log("dispatched");
  console.log(action);
  switch (type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: payload };
    default:
      throw new Error(`unhandled type ${type} in userReducer`);
  }
};
const INITIAL_STATE = { currentUser: null };
export const UserProvider = ({ children }) => {
  //destructuring the state to {currentUser}
  //whenever call dispatch, it will pass the action in.
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log(currentUser);
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    //stop listening
    const unsuscribe = onAuthStateChangedListener((user) => {
      // console.log(user);
      createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });
    return unsuscribe;
  }, []);
  //context created will have a .provider (component)
  //to wrap any other components need access to the value inside the context
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
// const userReducer = (state, action) => {
//   return {
//     currentUser: null,
//   };
// };
