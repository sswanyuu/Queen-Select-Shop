import { createContext, useState } from "react";
import PRODUCT from "../../src/components/routes/shop/shop-data.json";

export const ProductsContext = createContext({
  products: [],
});
export const ProductsProvider = ({ children }) => {
  const [products] = useState(PRODUCT);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
