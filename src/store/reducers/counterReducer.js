import { handleActions } from 'redux-actions';
import * as actions from '../actions/counterActions';

const initialState = 5;

export const counterReducer = handleActions({
  [actions.increase]: (state) => state + 1,
  [actions.decrease]: (state) => state - 1,
  [actions.increaseBy]: (state, action) => state + action.payload,
  [actions.decreaseBy]: (state, action) => state - action.payload,
}, initialState);