import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
console.log(11)
const appReducer = combineReducers(rootReducer);
console.log(12)
export const store = createStore(appReducer, applyMiddleware(thunk));