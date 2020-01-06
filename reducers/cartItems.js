import {
  ADD_TO_CART,
  INCREMENT_ITEM_QUANTITY,
  DECREMENT_ITEM_QUANTITY,
  REMOVE_FROM_CART
} from "../actions";

// increase item quantity by 1
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

// reduce item quantity by 1
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

// find index of item in cart array
const findItemIndex = (cart, updateItem) => {
  let itemIndex = cart.findIndex(item => item.id === updateItem.id);
  return itemIndex;
};

const initialState = {
  cartItems: [],
  total: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const cart = state.cartItems;
      const item = action.item;
      const price = JSON.parse(item.price);
      const itemInCartIndex = findItemIndex(cart, item);
      // if item is already in cart, updated qty; else add to cart
      const updatedCart =
        itemInCartIndex >= 0
          ? updateCartItem(cart, itemInCartIndex)
          : [...cart, item];

      return {
        ...state,
        cartItems: updatedCart,
        total: JSON.parse((state.total + price).toFixed(2))
      };
    }

    case INCREMENT_ITEM_QUANTITY: {
      const cart = state.cartItems;
      const updateItem = action.item;
      const price = JSON.parse(updateItem.price);
      const itemInCartIndex = findItemIndex(cart, updateItem);
      const updatedCart = updateCartItem(cart, itemInCartIndex);
      return {
        ...state,
        cartItems: updatedCart,
        total: JSON.parse((state.total + price).toFixed(2))
      };
    }

    case DECREMENT_ITEM_QUANTITY: {
      const cart = state.cartItems;
      const updateItem = action.item;
      const price = JSON.parse(updateItem.price);
      const itemInCartIndex = findItemIndex(cart, updateItem);
      const reducedCart = reduceCartItem(cart, itemInCartIndex);
      return {
        ...state,
        cartItems: reducedCart,
        total: JSON.parse((state.total - price).toFixed(2))
      };
    }

    case REMOVE_FROM_CART: {
      const cart = state.cartItems;
      const updateItem = action.item;
      const itemInCartIndex = findItemIndex(cart, updateItem);
      const totalItemPrice = JSON.parse(
        (cart[itemInCartIndex].quantity * cart[itemInCartIndex].price).toFixed(
          2
        )
      );
      return {
        ...state,
        cartItems: cart.filter(item => item.id !== action.item.id),
        total: JSON.parse((state.total - totalItemPrice).toFixed(2))
      };
    }
  }
  return state;
};
