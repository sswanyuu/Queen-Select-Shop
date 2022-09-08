import { createContext, useState, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";
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

const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  total: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, ...payload };
    default:
      throw new Error(`unhandled type ${type} in cartReducer`);
  }
};
export const CartItemContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeItemWhenCheckout: () => {},
  cartCount: 0,
  total: 0,
});
export const CartItemProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [{ cartItems, cartCount, total }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );
  const updateCartItemsReducer = (cartItems) => {
    const newCartCount = cartItems.reduce((total, currentItem) => {
      return total + currentItem.quantity;
    }, 0);
    const newTotal = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0);

    //when one update need to modify multiple values, useReducer is good to use
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems,
        cartCount: newCartCount,
        total: newTotal,
      })
    );
  };
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const removeItemFromCart = (productToRomove) => {
    const newCartItems = removeCartItem(cartItems, productToRomove);
    updateCartItemsReducer(newCartItems);
  };
  const removeItemWhenCheckout = (productToRomove) => {
    const newCartItems = removeCheckoutItem(cartItems, productToRomove);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    cartCount,
    total,
    addItemToCart,
    removeItemFromCart,
    removeItemWhenCheckout,
  };

  return (
    <CartItemContext.Provider value={value}>
      {children}
    </CartItemContext.Provider>
  );
};
