import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
//maybe there will be many middleware, put them into an array

const loggerMiddleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  //getState give the value of the state right now
  console.log("currentState: ", store.getState());
  next(action);
  console.log("nextState: ", store.getState());
};
const middlewares = [loggerMiddleWare];
//the middle catch actions before they hit the reducers and log the states out
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares));
//root reducer
export const store = createStore(rootReducer, undefined, composedEnhancers);
