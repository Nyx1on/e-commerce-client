import { useState } from "react";
import ShoppingBag from "../assets/shopping-bag.svg";
import "../styles/cartIcon.styles.scss";

const CartIcon = ({ itemCount }) => {
  const [hidden, setHidden] = useState(false);
  const handleDropDown = () => {
    setHidden((prevState) => !prevState);
  };
  return (
    <>
      <div className="cart-icon" onClick={handleDropDown}>
        <img src={ShoppingBag} className="shopping-icon"></img>
        {hidden ? <></> : ""}
        <span className="item-count">{itemCount}</span>
      </div>
    </>
  );
};

export default CartIcon;
