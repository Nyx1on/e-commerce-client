import "../styles/collectionItem.styles.scss";
import Button from "./Button.jsx";

const CategoryItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
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
        <Button onClick={() => addItem(item)}>Add to Cart</Button>
      </div>
    </>
  );
};

export default CategoryItem;
