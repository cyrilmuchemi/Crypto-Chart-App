import { combineReducers } from 'redux';
import { coinReducer } from './coinReducers';
import searchReducer from '../searchSlice';

const reducers = combineReducers({
  allCoins: coinReducer,
  search: searchReducer,
});

export default reducers;
