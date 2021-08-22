import { COINS_ACTIONS } from "./coinsActions";

export const coinsReducer = (state = { coins: [] }, action: any) => {
  if (action.type === COINS_ACTIONS.GET_COINS) {
    return { ...state, coins: action.payload };
  }

  return state;
};
