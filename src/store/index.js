import { createStore, combineReducers } from 'redux';
import { counterReducer } from './reducers/counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
