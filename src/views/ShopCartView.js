import React from "react";
import CardList from "components/card/CardList";

const ShopCartView = ({ products }) => {
  return (
    <>
      <CardList products={products} cart />
    </>
  );
};

export default ShopCartView;
