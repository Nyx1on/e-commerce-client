import React from "react";
import CollectionItem from "./CategoryItem";
import "../styles/shopPreview.styles.scss";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const ShopPreview = ({ collection }) => {
  const navigate = useNavigate();
  const { items } = collection;
  return (
    <>
      <div className="collection-preview">
        <h1
          style={{
            fontSize: "2.5rem",
            margin: "40px 0px 10px 0px",
            letterSpacing: "3px",
          }}
        >
          {collection.title.toUpperCase()}
        </h1>
        <div className="preview">
          {items
            .filter((item, idx) => idx < 4)
            .map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
        </div>
        <Button
          style={{ width: "16rem" }}
          onClick={() => navigate(`/category/${collection.routeName}`)}
        >
          View All Items
        </Button>
      </div>
    </>
  );
};

export default ShopPreview;
