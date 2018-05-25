import { createStore, combineReducers } from 'redux';
import { sampleData } from './sampleData.js';
import { user, roles } from './reducers.js';

const store = createStore(
  combineReducers({user, roles}),
  sampleData);

export default store;
