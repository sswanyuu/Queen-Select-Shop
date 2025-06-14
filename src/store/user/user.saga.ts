import { all, put, call, takeLatest } from 'typed-redux-saga/macro'
import { User } from 'firebase/auth'
import { USER_ACTION_TYPES } from './user.types'
import {
  signInSuccess,
  signInFailed,
  signUpFailed,
  signUpSuccess,
  signOutSuccess,
  signOutFailed,
  EmailSignInStart,
  SignUpStart,
  SignUpSuccess,
} from './user.action'
import {
  AdditionalInfo,
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
} from '../../utils/firebase/firebase.utils'
import { showNotification } from '../notification/notification.action'
import { syncCartStart, clearCartLocalOnly } from '../cart/cart.action'

export function* getSnapshotFromUserAuth(userAuth: User, additionalDetails?: AdditionalInfo) {
  try {
    const userSnapshot = yield* call(createUserDocumentFromAuth, userAuth, additionalDetails)
    if (userSnapshot) {
      const userData = userSnapshot.data()
      yield* put(
        signInSuccess({
          ...userData,
          id: userSnapshot.id,
        }),
      )
      yield* put(showNotification('Successfully signed in!', 'success'))
      yield* put(syncCartStart(userAuth.uid))
    }
  } catch (error) {
    yield* put(signInFailed(error as Error))
    yield* put(showNotification('Failed to sign in', 'error'))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser)
    console.log(userAuth)
    if (!userAuth) return
    yield* call(getSnapshotFromUserAuth, userAuth)
  } catch (error) {
    yield* put(showNotification('Failed to sign in', 'error'))
    yield* put(signInFailed(error as Error))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup)
    yield* call(getSnapshotFromUserAuth, user)
  } catch (error) {
    yield* put(showNotification('Failed to sign in', 'error'))
    yield* put(signInFailed(error as Error))
  }
}
export function* signInWithEmail({ payload: { email, password } }: EmailSignInStart) {
  try {
    const userCredential = yield* call(signInAuthUserWithEmailAndPassword, email, password)
    if (userCredential) {
      const { user } = userCredential
      yield* call(getSnapshotFromUserAuth, user)
    }
  } catch (error) {
    yield* put(showNotification('Failed to sign in', 'error'))
    yield* put(signInFailed(error as Error))
  }
}

export function* signUp({ payload: { email, password, displayName } }: SignUpStart) {
  try {
    const userCredential = yield* call(createAuthUserWithEmailAndPassword, email, password)
    if (userCredential) {
      const { user } = userCredential
      yield* put(signUpSuccess(user, { displayName }))
    }
  } catch (error) {
    yield* put(showNotification('Failed to sign up', 'error'))
    yield* put(signUpFailed(error as Error))
  }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }: SignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user, additionalDetails)
}

export function* signOut() {
  try {
    yield* call(signOutUser)
    yield* put(signOutSuccess())
    yield* put(clearCartLocalOnly())
    yield* put(showNotification('Successfully signed out!', 'success'))
  } catch (error) {
    yield* put(signOutFailed(error as Error))
    yield* put(showNotification('Failed to sign out', 'error'))
  }
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ])
}
