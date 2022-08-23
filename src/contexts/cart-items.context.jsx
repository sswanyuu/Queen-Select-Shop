import { createContext, useState, useEffect } from "react";

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

export const CartItemContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeItemWhenCheckout: () => {},
  cartCount: 0,
  Total: 0,
});

export const CartItemProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);
  const addItemToCart = (productToAdd) => {
    return setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToRomove) => {
    return setCartItems(removeCartItem(cartItems, productToRomove));
  };
  const removeItemWhenCheckout = (productToRomove) => {
    return setCartItems(removeCheckoutItem(cartItems, productToRomove));
  };
  //whenever cartItems change, call callback function
  useEffect(() => {
    //total -> privious value
    const newCartCount = cartItems.reduce((total, currentItem) => {
      return total + currentItem.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotal = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0);
    setTotal(newTotal);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    total,
    removeItemFromCart,
    removeItemWhenCheckout,
  };

  return (
    <CartItemContext.Provider value={value}>
      {children}
    </CartItemContext.Provider>
  );
};
