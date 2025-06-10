import storage from 'redux-persist/lib/storage'
import { compose, createStore, applyMiddleware, Middleware } from 'redux'
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import { rootReducer } from './root-reducer'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga'
export type RootState = ReturnType<typeof rootReducer>
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
type ExtendsPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[]
}
const persistConfig: ExtendsPersistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()
const middlewares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(
  (middleware): middleware is Middleware => Boolean(middleware),
)

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares))
export const store = createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)
