import { useState } from "react";
import ShoppingBag from "../assets/shopping-bag.svg";
import "../styles/cartIcon.styles.scss";

import { connect } from "react-redux";
import CartDropDown from "./CartDropDown";

const CartIcon = ({ itemCount }) => {
  const [hidden, setHidden] = useState(false);
  const dispatch = useDispatch();
  const handleDropDown = () => {
    setHidden((prevState) => !prevState);
    dispatch()
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

const mapStateToProps = (state) => ({
  itemCount: state.cart.cartItems.length,
});

export default connect(mapStateToProps, null)(CartIcon);
