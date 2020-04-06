import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import styles from "./HeaderNavigation.module.scss";

const HeaderNavigation = () => {
  return (
    // <ul>
    //   <li className={styles.navItem}>
    <header className={styles.wrapper}>
      <div></div>
      <Navigation />
      <NavLink
        className={styles.navItemList}
        activeClassName={styles.navItemListActive}
        to="edit"
      >
        Settings
      </NavLink>
    </header>
    //   </li>
    // </ul>
  );
};

export default HeaderNavigation;
