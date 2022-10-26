import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";

export const selectCartReducer = (state): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems
);
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (CartSlice) => CartSlice.isCartOpen
);
export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total: number, currentItem) => {
    return total + currentItem.quantity;
  }, 0)
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price;
  }, 0)
);
