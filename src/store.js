import { createStore, combineReducers } from 'redux';
import { sampleData } from './sampleData.js';
import { user, productions } from './reducers.js';
import C from './constants.js';


const store = createStore(
  combineReducers({user, productions}),
  sampleData);

export default store;
