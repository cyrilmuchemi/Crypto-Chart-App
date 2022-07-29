import { ActionTypes } from '../constants/actionTypes';

export const getCoins = (coins) => ({
  type: ActionTypes.GET_COINS,
  payload: coins,
});

export const selectedCoin = (coin) => ({
  type: ActionTypes.SELECTED_COIN,
  payload: coin,
});
