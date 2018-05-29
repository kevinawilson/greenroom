import {createStore, combineReducers} from 'redux';
import {sampleData} from './sampleData.js';
import {user, roles, ui, companies} from './utils/reducers.js';

const store = createStore(
  combineReducers({user, roles, ui, companies}),
  sampleData);

export default store;
