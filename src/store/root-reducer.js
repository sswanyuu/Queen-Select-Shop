//to combine smaller reducers together into a final reducer
import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";
//put an object inside the function
export const rootReducer = combineReducers({
  // name: reducerName
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
