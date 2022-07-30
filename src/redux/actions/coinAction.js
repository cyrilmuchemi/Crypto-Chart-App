import { ActionTypes } from '../constants/actionTypes';

export const getCoins = (coins) => ({
  type: ActionTypes.GET_COINS,
  payload: coins,
});

export default getCoins;
