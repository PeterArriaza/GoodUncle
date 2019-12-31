import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions";

const initialState = {
  cartItems: []
};

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //   return [...state, action.item];
      let itemAdded = action.item;
      console.log("before action:", state);
      if (state.length === 0) return [...state, itemAdded];
      state.map(item => {
        if (item.itemId !== itemAdded.itemId) {
          return item;
        } else {
          itemAdded.quantity += 1;
          return [...state, itemAdded];
        }
      });

    // case REMOVE_FROM_CART:
    //   return state.cartItemsfilter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};
