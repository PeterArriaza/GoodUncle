import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions";

// const initialState = {
//   cartItems: []
// };

const updateCartItem = (cart, index) => {
  const updatedCart = [...cart];
  const itemInCart = updatedCart[index];
  const updatedCartItem = {
    ...itemInCart,
    quantity: itemInCart.quantity + 1
  };
  updatedCart[index] = updatedCartItem;
  return updatedCart;
};

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let cart = state;
      let itemAdded = action.item;

      console.log("before action:", state);

      const itemInCartIndex = cart.findIndex(item => item.id === itemAdded.id);

      const updatedCart =
        itemInCartIndex >= 0
          ? updateCartItem(cart, itemInCartIndex)
          : [...state, itemAdded];

      return updatedCart;
  }
  return state;
};

// case REMOVE_FROM_CART:
//   return state.cartItemsfilter(item => item.id !== action.payload.id);
