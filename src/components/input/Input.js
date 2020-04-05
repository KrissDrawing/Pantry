import React from "react";
import styles from "components/input/Input.module.scss";
import PropTypes from "prop-types";

const Input = ({ name, label, type = "text", ...props }) => (
  <>
    <div className={styles.formItem}>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={name}
        placeholder=" "
        required
        {...props}
      />
      <label className={styles.label} htmlFor={name}>
        <span className={styles.contentName}>{label}</span>
      </label>
      {/* <div className={styles.formItemBar} /> */}
    </div>
  </>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
