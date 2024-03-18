import CART_ACTION_TYPES from "../action/cart.types";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "./cart.utils";

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ACTION_TYPES.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(action.state, action.payload),
      };
    case CART_ACTION_TYPES.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(action.state, action.payload),
      };
    case CART_ACTION_TYPES.CLEAR_ITEM:
      return {
        ...state,
        cartItems: clearItemFromCart(action.state, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
