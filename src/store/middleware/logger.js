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
