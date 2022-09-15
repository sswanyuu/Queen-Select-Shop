import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

const addCartItem = (cartItems, productToAdd) => {
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
const removeCartItem = (cartItems, productToRomove) => {
  //find the item to remove
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === productToRomove.id;
  });
  //remove the item when the quantity is equal to 1
  if (existingCartItem.quantity === 1) {
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
const removeCheckoutItem = (cartItems, productToRomove) =>
  cartItems.filter((cartItem) => {
    return cartItem.id !== productToRomove.id;
  });

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCart = (cartItems, productToRomove) => {
  const newCartItems = removeCartItem(cartItems, productToRomove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemWhenCheckout = (cartItems, productToRomove) => {
  const newCartItems = removeCheckoutItem(cartItems, productToRomove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
