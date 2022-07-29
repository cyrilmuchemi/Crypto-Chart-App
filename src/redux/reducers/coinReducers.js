import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  coins: [],
};

export const coinReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_COINS:
      return { ...state, coins: payload };

    default:
      return state;
  }
};

export const selectedCoinReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_COIN:
      return { ...state, ...payload };

    default:
      return state;
  }
};
