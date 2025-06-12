import { takeLatest, all, call, put, select } from 'typed-redux-saga/macro'
import { CART_ACTION_TYPES, CartItem } from './cart.types'
import { syncCartSuccess, syncCartFailed } from './cart.action'
import {
  loadCartItems,
  saveCartItems,
  clearCart as clearCartInFirebase,
} from '../../utils/firebase/firebase.utils'
import { selectCurrentUser } from '../user/user.selector'
import { selectCartItems } from './cart.selector'
import { User } from 'firebase/auth'
import { UserData } from '../../utils/firebase/firebase.utils'
import { showNotification } from '../notification/notification.action'

export function* syncCartToFirebase() {
  try {
    const currentUser: UserData | null = yield* select(selectCurrentUser)
    if (!currentUser?.id) return

    const cartItems: CartItem[] = yield* select(selectCartItems)
    yield* call(saveCartItems, currentUser.id, cartItems)
  } catch (error) {
    yield* put(syncCartFailed(error as Error))
  }
}

export function* loadCartFromFirebase() {
  try {
    const currentUser: UserData | null = yield* select(selectCurrentUser)
    if (!currentUser?.id) return

    const cartItems: CartItem[] = yield* call(loadCartItems, currentUser.id)
    yield* put(syncCartSuccess(cartItems))
  } catch (error) {
    yield* put(syncCartFailed(error as Error))
  }
}

export function* clearCartAfterPaymentSuccess() {
  try {
    const currentUser: UserData | null = yield* select(selectCurrentUser)
    if (!currentUser?.id) return

    // Clear cart in Firebase
    yield* call(clearCartInFirebase, currentUser.id)

    // Clear local cart state
    yield* put(syncCartSuccess([]))

    // Show success notification
    yield* put(showNotification('Payment successful! Cart has been cleared.', 'success'))
  } catch (error) {
    yield* put(syncCartFailed(error as Error))
    yield* put(showNotification('Failed to clear cart after payment.', 'error'))
  }
}

export function* onCartChange() {
  yield* takeLatest(CART_ACTION_TYPES.SET_CART_ITEMS, syncCartToFirebase)
}

export function* onUserSignIn() {
  yield* takeLatest(CART_ACTION_TYPES.SYNC_CART_START, loadCartFromFirebase)
}

export function* onPaymentSuccess() {
  yield* takeLatest(CART_ACTION_TYPES.CLEAR_CART_AFTER_PAYMENT, clearCartAfterPaymentSuccess)
}

export function* cartSaga() {
  yield* all([call(onCartChange), call(onUserSignIn), call(onPaymentSuccess)])
}
