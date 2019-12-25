const initialState = { total: 0 };

const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return Object.assign({}, state, {
        total: [...state.total, action.payload]
      });
    case "REMOVE_FROM_CART":
      return state.filter(item => item.id !== action.payload.id);
  }
  return state;
};

export default cartItems;
