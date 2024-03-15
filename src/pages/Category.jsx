import { useParams } from "react-router-dom";
import shopData from "../data/shop.data";
import CategoryItem from "../components/CategoryItem";
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
        <h1
          className="title"
          style={{
            letterSpacing: "2px",
            fontSize: "2.5rem",
          }}
        >
          BROWSE
          <div>THE LATEST COLLECTION OF {title.toUpperCase()}</div>
        </h1>
        <div className="preview">
          {items.map((item) => (
            <CategoryItem key={id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
