import { initializeApp } from 'firebase/app'

import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from 'firebase/auth'
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
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore'
import { Category } from '../../store/categories/category.types'
import { CartItem } from '../../store/cart/cart.types'

const firebaseConfig = {
  apiKey: 'AIzaSyD81KgezZBdMUTREv_Rwm3d-pH61HBTY4c',
  authDomain: 'queen-select-shop.firebaseapp.com',
  projectId: 'queen-select-shop',
  storageBucket: 'queen-select-shop.appspot.com',
  messagingSenderId: '979545585433',
  appId: '1:979545585433:web:c8b59131d8b1d394ea3788',
}

initializeApp(firebaseConfig)
const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  //always ask the users to selsect a google accout
  prompt: 'select_account',
})
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore()
export type ObjectsToAdd = {
  title: string
}
export const addCollectionAndDocuments = async <T extends ObjectsToAdd>(
  collectionKey: string,
  objectsToAdd: T[],
): Promise<void> => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)
  //each object stand for 5 categories
  objectsToAdd.forEach((object) => {
    //collectionRef tell whichdatabase to use
    const docRef = doc(collectionRef, object.title.toLowerCase())
    //the value of it is the object
    batch.set(docRef, object)
  })
  await batch.commit()
  console.log('done')
}

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)
  const querySnapshot = await getDocs(q)
  //tell the typescript what is the data looks like (we know the look of the data in the firebase)
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Category)
}

export type AdditionalInfo = {
  displayName?: string
}
export type UserData = {
  id: string
  createDate: Date
  displayName: string
  email: string
}
export const createUserDocumentFromAuth = async (
  userAuth: User,
  addittonInfo = {} as AdditionalInfo,
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return
  const { displayName, email, uid } = userAuth
  console.log(userAuth)
  const userDocRef = doc(db, 'users', uid)
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)

  if (!userSnapshot.exists()) {
    const createDate = new Date()
    try {
      await setDoc(userDocRef, {
        id: uid,
        displayName,
        email,
        createDate,
        ...addittonInfo,
      })
    } catch (error) {
      console.log('error: Creating the user', error)
    }
  }
  return userSnapshot as QueryDocumentSnapshot<UserData>
}
export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return
  return createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}
export const signOutUser = async () => await signOut(auth)
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  //open listener: whenever the auth state change, callback function run
  onAuthStateChanged(auth, callback)

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe()
        resolve(userAuth)
      },
      reject,
    )
  })
}

export const saveCartItems = async (userId: string, cartItems: CartItem[]): Promise<void> => {
  try {
    const userCartRef = doc(db, 'carts', userId)
    const cartSnapshot = await getDoc(userCartRef)

    if (!cartSnapshot.exists()) {
      // Create new cart document if it doesn't exist
      await setDoc(userCartRef, { items: cartItems })
    } else {
      // Update existing cart document
      await updateDoc(userCartRef, { items: cartItems })
    }
  } catch (error) {
    console.error('Error saving cart items:', error)
    throw error
  }
}

export const loadCartItems = async (userId: string): Promise<CartItem[]> => {
  try {
    const userCartRef = doc(db, 'carts', userId)
    const cartSnapshot = await getDoc(userCartRef)

    if (cartSnapshot.exists()) {
      return cartSnapshot.data().items
    }
    return []
  } catch (error) {
    console.error('Error loading cart items:', error)
    throw error
  }
}

export const addItemToCart = async (userId: string, itemToAdd: CartItem): Promise<void> => {
  try {
    const userCartRef = doc(db, 'carts', userId)
    await updateDoc(userCartRef, {
      items: arrayUnion(itemToAdd),
    })
  } catch (error) {
    console.error('Error adding item to cart:', error)
    throw error
  }
}

export const removeItemFromCart = async (userId: string, itemToRemove: CartItem): Promise<void> => {
  try {
    const userCartRef = doc(db, 'carts', userId)
    await updateDoc(userCartRef, {
      items: arrayRemove(itemToRemove),
    })
  } catch (error) {
    console.error('Error removing item from cart:', error)
    throw error
  }
}

export const clearCart = async (userId: string): Promise<void> => {
  try {
    const userCartRef = doc(db, 'carts', userId)
    await updateDoc(userCartRef, {
      items: [],
    })
  } catch (error) {
    console.error('Error clearing cart:', error)
    throw error
  }
}
