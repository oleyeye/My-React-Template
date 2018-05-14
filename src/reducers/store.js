import {createStore} from 'redux';
import combineReducers from './index';

let store = createStore(combineReducers);

export default store;