import React from "react";
import ProductForm from "components/Forms/ProductForm";
import styles from "./Modal.module.scss";

const Modal = ({ add }) => (
  <div className={styles.wrapper}>
    <ProductForm add />
  </div>
);

export default Modal;
