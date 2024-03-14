import { useParams } from "react-router-dom";
import shopData from "../data/shop.data";
import CollectionItem from "../components/CollectionItem";
import "../styles/category.styles.scss";

const Category = () => {
  const params = useParams();
  const filteredCollection = shopData.filter((collection) =>
    collection.routeName.includes(params.id)
  );
  const { id, title, items } = filteredCollection[0];
  return (
    <>
      <div className="category-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
          {items.map((item) => (
            <CollectionItem key={id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
