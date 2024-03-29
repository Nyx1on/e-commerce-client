import { useDispatch } from "react-redux";
import "../styles/cartItem.styles.scss";
import { clearItem } from "../redux/action/cart/cart.action";

const CartItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(clearItem(item));
  };
  return (
    <>
      <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className="item-info">
          <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">
              {quantity} x ${price}
            </span>
          </div>
          <div className="cross-icon" onClick={handleOnClick}>
            X
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
