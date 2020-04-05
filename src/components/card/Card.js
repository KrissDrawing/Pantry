import React from "react";
import styles from "components/card/Card.module.scss";
import AppContext from "context";
import Button from "components/button/Button";

const Card = ({ name, amount, uid, category }) => (
  <AppContext.Consumer>
    {(context) => (
      <div className={styles.wrapper}>
        <h3> {name} </h3>
        <h2>{amount}</h2>
        <Button onClick={() => context.deleteProduct(uid)}>X</Button>
        <div className={styles.categoryMark}></div>
      </div>
    )}
  </AppContext.Consumer>
);

export default Card;
