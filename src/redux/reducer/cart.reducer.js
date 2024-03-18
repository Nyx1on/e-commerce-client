import CART_ACTION_TYPES from "../action/cart.types";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "./cart.utils";

const INITIAL_STATE = {
  cartItems: [],
  isDropDownVisible: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ACTION_TYPES.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CART_ACTION_TYPES.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CART_ACTION_TYPES.CLEAR_ITEM:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload),
      };
    case CART_ACTION_TYPES.TOGGLE_DROPDOWN:
      return {
        ...state,
        isDropDownVisible: !state.isDropDownVisible,
      };
    default:
      return state;
  }
};

export default cartReducer;
