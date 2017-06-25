import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from '../reducers/TodoReducer'

const thunkMiddleware = ({ dispatch, getState }) => {
  return (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return next(action);
  };
};

const composedReducer = combineReducers({...reducers});

export const store = createStore(
  composedReducer,
  applyMiddleware(thunkMiddleware)
);