import React from "react";
import shopData from "../data/shop.data";
import ShopPreview from "../components/ShopPreview";

const Shop = () => {
  const collections = shopData;
  return (
    <>
      {collections.map((collection) => (
        <ShopPreview key={collection.id} collection={collection} />
      ))}
    </>
  );
};

export default Shop;
