import storage from 'redux-persist/lib/storage';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

const initReducers = (key, reducers) => {
  const reduced = reducers.reduce((acc, obj) => ({ ...acc, ...obj }), {});
  const combinedReducers = combineReducers(reduced);
  if (!key) return combinedReducers;
  const config = { key, storage };
  const persistedReducer = persistReducer(config, combinedReducers);
  return persistedReducer;
};

const bindMiddleware = (middleware = []) => {
  const usedev = process.env === 'development';
  if (usedev) {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const configure = (key = false, initialState = {}, ...rest) => {
  const reducers = initReducers(key, rest);
  const store = createStore(reducers, initialState, bindMiddleware());
  const persistor = (key && persistStore(store)) || null;
  return { persistor, store };
};

export default configure;
