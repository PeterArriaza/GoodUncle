import {
  ADD_TO_CART,
  INCREMENT_ITEM_QUANTITY,
  DECREMENT_ITEM_QUANTITY
} from "../actions";

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

const findItemIndex = (cart, updateItem) => {
  let itemIndex = cart.findIndex(item => item.id === updateItem.id);
  return itemIndex;
};

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const cart = state;
      const item = action.item;

      //   console.log("before action:", state);

      const itemInCartIndex = findItemIndex(cart, item);

      console.log(itemInCartIndex);

      const updatedCart =
        itemInCartIndex >= 0
          ? updateCartItem(cart, itemInCartIndex)
          : [...state, item];

      return updatedCart;
    }

    case INCREMENT_ITEM_QUANTITY: {
      const cart = state;
      const updateItem = action.item;
      const itemInCartIndex = findItemIndex(cart, updateItem);
      const updatedCart = updateCartItem(cart, itemInCartIndex);
      return updatedCart;
    }
  }
  return state;
};

// case REMOVE_FROM_CART:
//   return state.cartItemsfilter(item => item.id !== action.payload.id);
