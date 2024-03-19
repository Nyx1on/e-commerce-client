import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/checkoutPage.styles.scss";
import Button from "../components/Button";
import {
  addItem,
  clearItem,
  removeItem,
} from "../redux/action/cart/cart.action";
import { FaPlus, FaMinus } from "react-icons/fa";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const onToken = (token) => {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token),
    }).then((response) => {
      response.json().then((data) => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop");
  };

  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleClearItem = (item) => {
    dispatch(clearItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="checkout-page">
      <div
        style={{
          fontSize: "2.5rem",
          padding: "0px 0px 40px 0px",
          fontWeight: "500px",
        }}
      >
        Checkout
      </div>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div className="checkout-items">
        {items.map((item) => (
          <div className="checkout-item" key={item.id}>
            <div className="item-block">
              <img src={item.imageUrl} alt="Product" />
            </div>
            <div className="item-block">
              <span>{item.name}</span>
            </div>
            <div className="item-block">
              <div className="quantity-buttons">
                <button onClick={() => handleAddItem(item)}>
                  <FaPlus />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleRemoveItem(item)}>
                  <FaMinus />
                </button>
              </div>
            </div>
            <div className="item-block">
              <span>${item.price}</span>
            </div>
            <div className="item-block" onClick={() => handleClearItem(item)}>
              <span>&#10005;</span>
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        <span>TOTAL: ${totalPrice}</span>
      </div>

      <div className="checkout-button" s>
        <div style={{ padding: "10px 0px" }}>
          <Button onClick={handleClick}>Back to Shop</Button>
        </div>
        <StripeCheckout
          token={onToken}
          stripeKey="pk_test_51OuUubSGWIKCsaAKNCRti2yCmh0VQU675Wzo8d4SkqvkhgTKBr71jGQatJdkVEs38A0rYjoKmtkiDadgVsBBOArS00vWrQghDZ"
          amount={totalPrice * 100}
        />
      </div>
    </div>
  );
};

export default Checkout;
