import { combineReducers } from 'redux';
import addTaskReducer from './addTaskReducer';

const rootReducers = combineReducers({
  addTask: addTaskReducer
});

export default rootReducers;
