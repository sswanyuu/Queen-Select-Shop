import { CategoryItem } from '../categories/category.types'

export enum CART_ACTION_TYPES {
  SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
  SET_IS_CART_OPEN = 'cart/SET_IS_CART_OPEN',
  SYNC_CART_START = 'cart/SYNC_CART_START',
  SYNC_CART_SUCCESS = 'cart/SYNC_CART_SUCCESS',
  SYNC_CART_FAILED = 'cart/SYNC_CART_FAILED',
  CLEAR_CART_LOCAL_ONLY = 'cart/CLEAR_CART_LOCAL_ONLY',
  CLEAR_CART_AFTER_PAYMENT = 'cart/CLEAR_CART_AFTER_PAYMENT',
}

export type CartItem = CategoryItem & {
  quantity: number
}

export type CartState = {
  readonly cartItems: CartItem[]
  readonly isCartOpen: boolean
  readonly error: Error | null
}
