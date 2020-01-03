export const ADD_TO_CART = "ADD_TO_CART";
export const addToCart = item => ({
  type: ADD_TO_CART,
  item
});

export const INCREMENT_ITEM_QUANTITY = "INCREMENT_ITEM_QUANTITY";
export const incrementItemQuantity = item => ({
  type: INCREMENT_ITEM_QUANTITY,
  item
});

export const DECREMENT_ITEM_QUANTITY = "DECREMENT_ITEM_QUANTITY";
export const decrementItemQuantity = item => ({
  type: DECREMENT_ITEM_QUANTITY,
  item
});

export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const removeFromCart = item => ({
  type: REMOVE_FROM_CART,
  item
});
