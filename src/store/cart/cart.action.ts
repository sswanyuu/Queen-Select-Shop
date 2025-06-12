import { CART_ACTION_TYPES, CartItem } from './cart.types'
import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils'
import { CategoryItem } from '../categories/category.types'

// Cart visibility actions
export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>
export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean),
)

// Cart items actions
export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>
export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems),
)

// Cart sync actions
export type SyncCartStart = ActionWithPayload<CART_ACTION_TYPES.SYNC_CART_START, string>
export type SyncCartSuccess = ActionWithPayload<CART_ACTION_TYPES.SYNC_CART_SUCCESS, CartItem[]>
export type SyncCartFailed = ActionWithPayload<CART_ACTION_TYPES.SYNC_CART_FAILED, Error>

export const syncCartStart = withMatcher(
  (userId: string): SyncCartStart => createAction(CART_ACTION_TYPES.SYNC_CART_START, userId),
)

export const syncCartSuccess = withMatcher(
  (cartItems: CartItem[]): SyncCartSuccess =>
    createAction(CART_ACTION_TYPES.SYNC_CART_SUCCESS, cartItems),
)

export const syncCartFailed = withMatcher(
  (error: Error): SyncCartFailed => createAction(CART_ACTION_TYPES.SYNC_CART_FAILED, error),
)

// Clear cart actions
export type ClearCartLocalOnly = Action<CART_ACTION_TYPES.CLEAR_CART_LOCAL_ONLY>
export type ClearCartAfterPayment = Action<CART_ACTION_TYPES.CLEAR_CART_AFTER_PAYMENT>

export const clearCartLocalOnly = withMatcher(
  (): ClearCartLocalOnly => createAction(CART_ACTION_TYPES.CLEAR_CART_LOCAL_ONLY),
)

export const clearCartAfterPayment = withMatcher(
  (): ClearCartAfterPayment => createAction(CART_ACTION_TYPES.CLEAR_CART_AFTER_PAYMENT),
)

// Cart modification helper functions
const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems: CartItem[], productToRemove: CategoryItem): CartItem[] => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === productToRemove.id
  })

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => {
      return cartItem.id !== productToRemove.id
    })
  }

  return cartItems.map((cartItem) => {
    return cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  })
}

const removeCheckoutItem = (cartItems: CartItem[], productToRemove: CategoryItem): CartItem[] =>
  cartItems.filter((cartItem) => {
    return cartItem.id !== productToRemove.id
  })

// Cart modification actions
export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd)
  return setCartItems(newCartItems)
}

export const removeItemFromCart = (cartItems: CartItem[], productToRemove: CartItem) => {
  const newCartItems = removeCartItem(cartItems, productToRemove)
  return setCartItems(newCartItems)
}

export const removeItemWhenCheckout = (cartItems: CartItem[], productToRemove: CartItem) => {
  const newCartItems = removeCheckoutItem(cartItems, productToRemove)
  return setCartItems(newCartItems)
}
