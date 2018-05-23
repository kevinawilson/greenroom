import { createStore, combineReducers } from 'redux';
import { sampleData } from './sampleData.js';
import { roleReducer } from './reducers.js';
import C from './constants.js';


const store = createStore(roleReducer, sampleData);

export { store };
