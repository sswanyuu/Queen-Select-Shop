import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
//maybe there will be many middleware, put them into an array
const middlewares = [logger];
//the middle catch actions before they hit the reducers and log the states out
const composedEnhancers = compose(applyMiddleware(...middlewares));
//root reducer
export const store = createStore(rootReducer, undefined, composedEnhancers);
