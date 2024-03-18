import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/cartDropDown.scss";
import Button from "./Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";

const CartDropDown = () => {
  let navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <>
      <div className="cart-dropdown">
        <div className="cart-items">
          {cartItems.map((item, idx) => (
            <CartItem key={idx} item={item} />
          ))}
        </div>
        <Button onClick={() => navigate("/checkout")}>GO TO CHECKOUT</Button>
      </div>
    </>
  );
};

export default CartDropDown;
