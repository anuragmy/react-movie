import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { movieReducer } from './reducers/reducer';

const reducers = {
  movies: movieReducer,
};

export const rootReducers = combineReducers(reducers);
export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
