import { combineReducers } from 'redux';
import { coinReducer } from './coinReducers';

const reducers = combineReducers({
  allCoins: coinReducer,
});

export default reducers;
