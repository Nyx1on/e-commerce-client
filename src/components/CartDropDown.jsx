import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/cartDropDown.scss";
import Button from "./Button";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";

const CartDropDown = ({ cartItems }) => {
  let navigate = useNavigate();
 



  return (
    <>
      <div className="cart-dropdown">
        <div className="cart-items">
          {cartItems.map((item, idx) => (
            <CartItem key={idx} item={item} />
          ))}
        </div>
        <Button onClick={() => navigate("/checkout")}>GOTOCHECKOUT</Button>
      </div>
    </>
  );
};

export default CartDropDown;
