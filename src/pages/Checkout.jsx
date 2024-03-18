import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/checkoutPage.styles.scss";
import Button from "../components/Button";
import { addItem, clearItem, removeItem } from "../redux/action/cart.action";
import { FaPlus, FaMinus } from "react-icons/fa";

const Checkout = () => {
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
      <div className="checkout-button">
        <Button>Proceed to Checkout</Button>
      </div>
    </div>
  );
};

export default Checkout;
