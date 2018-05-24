import { createStore, combineReducers } from 'redux';
import { sampleData } from './sampleData.js';
import { user, productions } from './reducers.js';

const store = createStore(
  combineReducers({user, productions}),
  sampleData);

export default store;
