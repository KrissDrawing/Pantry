import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = (props) => {
  return (
    <nav>
      {console.log(props)}
      <ul className={styles.wrapper}>
        <li className={styles.navItem}>
          <NavLink
            exact
            className={styles.navItemList}
            activeClassName={styles.navItemListActive}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            exact
            className={styles.navItemList}
            activeClassName={styles.navItemListActive}
            to="/add"
          >
            Add
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            exact
            className={styles.navItemList}
            activeClassName={styles.navItemListActive}
            to="/cart"
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
