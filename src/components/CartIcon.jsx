import { useState } from "react";
import ShoppingBag from "../assets/shopping-bag.svg";
import "../styles/cartIcon.styles.scss";

import { useDispatch, useSelector } from "react-redux";
import CartDropDown from "./CartDropDown";
import { toggleCartDropdown } from "../redux/action/cart.action";

const CartIcon = () => {
  const [hidden, setHidden] = useState(false);
  const dispatch = useDispatch();
  const itemCount = useSelector((state) => state.cart.cartItems.length);

  const handleDropDown = () => {
    dispatch(toggleCartDropdown());
    setHidden((prevState) => !prevState);
  };
  return (
    <>
      <div className="cart-icon" onClick={handleDropDown}>
        <img src={ShoppingBag} className="shopping-icon"></img>
        {hidden ? <CartDropDown /> : ""}
        <span className="item-count">{itemCount}</span>
      </div>
    </>
  );
};

export default CartIcon;
