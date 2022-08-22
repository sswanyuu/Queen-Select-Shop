import { createContext, useState } from "react";
export const CartItemContext = createContext({
  isCartOpen: "false",
  setIsCartOpen: () => {},
});
export const CartItemProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  return (
    <CartItemContext.Provider value={value}>
      {children}
    </CartItemContext.Provider>
  );
};
