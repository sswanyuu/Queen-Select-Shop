import { AnyAction } from 'redux'
import { CartItem } from './cart.types'
import {
  setCartItems,
  setIsCartOpen,
  syncCartFailed,
  syncCartSuccess,
  clearCartLocalOnly,
  clearCartAfterPayment,
} from './cart.action'

export type CartState = {
  readonly cartItems: CartItem[]
  readonly isCartOpen: boolean
  readonly error: Error | null
}

const INITIAL_STATE: CartState = {
  cartItems: [],
  isCartOpen: false,
  error: null,
}

export const cartReducer = (state = INITIAL_STATE, action: AnyAction): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    }
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    }
  }

  if (syncCartSuccess.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
      error: null,
    }
  }

  if (syncCartFailed.match(action)) {
    return {
      ...state,
      error: action.payload,
    }
  }

  if (clearCartLocalOnly.match(action) || clearCartAfterPayment.match(action)) {
    return {
      ...state,
      cartItems: [],
    }
  }

  return state
}
