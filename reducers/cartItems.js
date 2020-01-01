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

const reduceCartItem = (cart, index) => {
  const updatedCart = [...cart];
  const itemInCart = updatedCart[index];
  if (itemInCart.quantity === 1)
    return updatedCart.filter(item => item.id !== itemInCart.id);
  else {
    const updatedCartItem = {
      ...itemInCart,
      quantity: itemInCart.quantity - 1
    };
    updatedCart[index] = updatedCartItem;
    return updatedCart;
  }
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
      const itemInCartIndex = findItemIndex(cart, item);

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

    case DECREMENT_ITEM_QUANTITY: {
      const cart = state;
      const updateItem = action.item;
      const itemInCartIndex = findItemIndex(cart, updateItem);
      const reducedCart = reduceCartItem(cart, itemInCartIndex);
      return reducedCart;
    }
  }
  return state;
};

// case REMOVE_FROM_CART:
//   return state.cartItemsfilter(item => item.id !== action.payload.id);
