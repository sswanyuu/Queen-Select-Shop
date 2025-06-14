import { combineReducers } from 'redux'
import { userReducer } from './user/user.reducer'
import { categoriesReducer } from './categories/category.reducer'
import { cartReducer } from './cart/cart.reducer'
import { notificationReducer } from './notification/notification.reducer'

export const rootReducer = combineReducers({
  // name: reducerName
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  notification: notificationReducer,
})
