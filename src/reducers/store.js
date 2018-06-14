import { createStore } from 'redux';
import combineReducers from './index';

const store = createStore(combineReducers);

export default store;
