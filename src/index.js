import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/users.context";
import { ProductsProvider } from "./contexts/products.context";
import { CartItemProvider } from "./contexts/cart-items.context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*wrap <App/> with BrowserRouter to  read URL and track navigation*/}
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartItemProvider>
            <App />
          </CartItemProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
