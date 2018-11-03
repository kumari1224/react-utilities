import { combineReducers } from 'redux';
import data from './data';
import modal from './modal';
import limitFilter from './limitFilter';
import startIndex from './startIndex';

const rootReducer = combineReducers({
  data,
  modal,
  limitFilter,
  startIndex,
});

export default rootReducer;