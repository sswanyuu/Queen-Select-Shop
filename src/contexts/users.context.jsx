import { createContext, useState, useEffect } from "react";
import {
  signOutUser,
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";
//as the actual value to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    //stop listening
    const unsuscribe = onAuthStateChangedListener((user) => {
      console.log(user);
      createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });
    return unsuscribe;
  }, []);
  //context created will have a .provider (component)
  //to wrap any other components need access to the value inside the context
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
