import { useDispatch } from "react-redux";
import "../styles/collectionItem.styles.scss";
import Button from "./Button.jsx";
import { addItem } from "../redux/action/cart/cart.action.js";

const CategoryItem = ({ item }) => {
  const { name, imageUrl, price } = item;
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem(item));
  };
  return (
    <>
      <div className="collection-item">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">${price}</span>
        </div>
        <Button onClick={handleAddItem}>Add to Cart</Button>
      </div>
    </>
  );
};

export default CategoryItem;
