import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CartItemProvider } from "./contexts/cart-items.context";
import { Provider } from "react-redux";
import { store } from "./store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* wrap all of the app with Provider by redox and add store */}
    <Provider store={store}>
      {/*wrap <App/> with BrowserRouter to  read URL and track navigation*/}
      <BrowserRouter>
        <CartItemProvider>
          <App />
        </CartItemProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
