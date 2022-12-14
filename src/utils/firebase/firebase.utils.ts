// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  //signInWithRedirect,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth";
import {
  getFirestore,
  //get/sec document
  doc,
  //get/set data
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { Category } from "../../store/categories/category.types";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD81KgezZBdMUTREv_Rwm3d-pH61HBTY4c",
  authDomain: "queen-select-shop.firebaseapp.com",
  projectId: "queen-select-shop",
  storageBucket: "queen-select-shop.appspot.com",
  messagingSenderId: "979545585433",
  appId: "1:979545585433:web:c8b59131d8b1d394ea3788",
};

// Initialize Firebase
//To be able to CRUB
const firebaseApp = initializeApp(firebaseConfig);
//thiss is the class of Google provider
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  //always ask the users to selsect a google accout
  prompt: "select_account",
});
//the authentication that communte with the firebase
//the same one for every application
//keep track the auth even when refreshing the website
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export type ObjectsToAdd = {
  title: string;
};
export const addCollectionAndDocuments = async <T extends ObjectsToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  //each object stand for 5 categories
  objectsToAdd.forEach((object) => {
    //collectionRef tell whichdatabase to use
    const docRef = doc(collectionRef, object.title.toLowerCase());
    //the value of it is the object
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  //tell the typescript what is the data looks like (we know the look of the data in the firebase)
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
  );
};

export type AdditionalInfo = {
  displayName?: string;
};
export type UserData = {
  createDate: Date;
  displayName: string;
  email: string;
};
//the additionalInfo is an object
export const createUserDocumentFromAuth = async (
  userAuth: User,
  addittonInfo = {} as AdditionalInfo
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;
  const { displayName, email, uid } = userAuth;
  console.log(userAuth);
  //database/collection name/identifier
  //uid is the unique id of google account
  const userDocRef = doc(db, "users", uid);
  // console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  //check if the doc exit
  //if the doc doesn't exist, build a new doc
  if (!userSnapshot.exists()) {
    const createDate = new Date();
    //try something asynchronous. if there is any error, catch it
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createDate,
        //spread the object of the end of the doc
        ...addittonInfo,
      });
    } catch (error) {
      console.log("error: Creating the user", error);
    }
  }
  return userSnapshot as QueryDocumentSnapshot<UserData>;
};
//put all the function from using external API (database) in one place
//if there is any change, it's easier to organize
export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  //open listener: whenever the auth state change, callback function run
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
