import { combineReducers } from 'redux';
import { coinReducer, selectedCoinReducer } from './coinReducers';

const reducers = combineReducers({
  allCoins: coinReducer,
  coin: selectedCoinReducer,
});

export default reducers;
