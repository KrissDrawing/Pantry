import React from "react";
import Card from "./Card";
import styles from "./CardList.module.scss";

const CardList = ({ products, cart }) => {
  const filteredProducts = cart
    ? products.filter((item) => +item.amount < +item.limit)
    : products;
  return (
    <>
      {filteredProducts.length === 0 ? (
        <h2 className={styles.empty}>nothing here</h2>
      ) : (
        <ul className={styles.wrapper}>
          {filteredProducts.map((product) => (
            <Card key={product.uid} {...product} />
          ))}
        </ul>
      )}
    </>
  );
};

export default CardList;
