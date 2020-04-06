import React from "react";
import styles from "components/card/Card.module.scss";
import AppContext from "context";
import Button from "components/button/Button";
import { Link } from "react-router-dom";

const Card = ({ name, amount, uid, id, category }) => (
  <AppContext.Consumer>
    {(context) => (
      <div className={styles.wrapper}>
        <h3> {name} </h3>
        <h2>{amount}</h2>
        <Button
          onClick={() => {
            context.deletefb(id);
          }}
        >
          X
        </Button>
        <Button onClick={context.edited}>
          <Link to={`/${id}/edit`}>EDIT</Link>
        </Button>
        <div className={styles.categoryMark}></div>
      </div>
    )}
  </AppContext.Consumer>
);

export default Card;
