import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions";
// const initialState = { total: 0 };

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.item];
    //   let total = state.total;
    //   return total + 1;
    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload.id);
  }
  return state;
};
