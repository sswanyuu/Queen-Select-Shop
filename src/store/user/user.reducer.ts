import { act } from 'react-dom/test-utils'
import {
  signInSuccess,
  signOutSuccess,
  signInFailed,
  signOutFailed,
  signUpFailed,
} from './user.action'
import { AnyAction } from 'redux'
import { UserData } from '../../utils/firebase/firebase.utils'
export type UserState = {
  readonly currentUser: UserData | null
  readonly isLoading: Boolean
  readonly errorState: Error | null
}
const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  errorState: null,
}

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload }
  }
  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null }
  }
  if (signInFailed.match(action) || signOutFailed.match(action) || signUpFailed.match(action)) {
    return { ...state, errorState: action.payload }
  }

  //action pass every reducer, so if nothing change, pass the previous state
  return state
}
