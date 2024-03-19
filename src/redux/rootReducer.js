import { combineReducers } from "redux";
import cartReducer from "./reducer/cart/cart.reducer";
import authReducer from "./reducer/user/user.reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: authReducer,
});

export default rootReducer;
