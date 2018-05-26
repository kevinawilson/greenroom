import { createStore, combineReducers } from 'redux';
import { sampleData } from './sampleData.js';
import { user, roles, ui } from './utils/reducers.js';

const store = createStore(
  combineReducers({user, roles, ui}),
  sampleData);

export default store;
