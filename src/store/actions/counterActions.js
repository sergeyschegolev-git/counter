import { createAction } from 'redux-actions';

const prefix = 'counter:';

export const increase = createAction(`${prefix}increase`);
export const decrease = createAction(`${prefix}decrease`);
export const increaseBy = createAction(`${prefix}increaseBy`);
export const decreaseBy = createAction(`${prefix}decreaseBy`);
