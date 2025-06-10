import { AnyAction } from 'redux'
import { TCartItem } from './cart.types'
import { setCartItems, setIsCartOpen } from './cart.action'

export type CartState = {
  readonly isCartOpen: boolean
  readonly cartItems: TCartItem[]
}
export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
}

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction): CartState => {
  if (setIsCartOpen.match(action)) {
    return { ...state, isCartOpen: action.payload }
  }
  if (setCartItems.match(action)) {
    return { ...state, cartItems: action.payload }
  }
  return state
}
