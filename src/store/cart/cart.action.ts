import { CategoryItem } from "../categories/category.types";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";
import { type } from "os";

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === productToAdd.id;
  });
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (
  cartItems: CartItem[],
  productToRomove: CategoryItem
): CartItem[] => {
  //find the item to remove
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === productToRomove.id;
  });
  //remove the item when the quantity is equal to 1
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => {
      return cartItem.id !== productToRomove.id;
    });
  }
  //decrease the quantity when the quantity is not equal to  1
  return cartItems.map((cartItem) => {
    return cartItem.id === productToRomove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};
const removeCheckoutItem = (
  cartItems: CartItem[],
  productToRomove: CategoryItem
): CartItem[] =>
  cartItems.filter((cartItem) => {
    return cartItem.id !== productToRomove.id;
  });

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;
export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;
export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);
export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};
export const removeItemFromCart = (
  cartItems: CartItem[],
  productToRomove: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, productToRomove);
  return setCartItems(newCartItems);
};
export const removeItemWhenCheckout = (
  cartItems: CartItem[],
  productToRomove: CartItem
) => {
  const newCartItems = removeCheckoutItem(cartItems, productToRomove);
  return setCartItems(newCartItems);
};
