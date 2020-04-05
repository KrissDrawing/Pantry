import React from "react";
import Card from "./Card";
import styles from "./CardList.module.scss";

const CardList = ({ products, cart }) => {
  const filteredProducts = cart
    ? products.filter((item) => +item.amount < +item.limit)
    : products;
  return (
    <ul className={styles.wrapper}>
      {filteredProducts.map((product) => (
        <Card key={product.uid} {...product} />
      ))}
    </ul>
  );
};

export default CardList;
