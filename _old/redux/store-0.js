// yarn add redux-devtools-extension redux-thunk
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators...
});

const bindMiddleware = (middleware = []) => {
  const appliedMiddlewares = applyMiddleware(...middleware);
  const usedev = process.env.NODE_ENV === 'development';
  if (usedev) return composeEnhancers(appliedMiddlewares);
  return appliedMiddlewares;
};

const configure = (reducers = false, initialState = {}) => {
  const combinedReducers = combineReducers(reducers);
  const middlewares = [thunk];
  const store = createStore(
    combinedReducers,
    initialState,
    bindMiddleware(middlewares)
  );
  return store;
};

export default configure;
