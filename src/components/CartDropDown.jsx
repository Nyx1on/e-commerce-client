import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/cartDropDown.scss";
import Button from "./Button";

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

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStateToProps, null)(CartDropDown);
