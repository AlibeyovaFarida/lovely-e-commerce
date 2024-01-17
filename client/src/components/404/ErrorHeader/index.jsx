import React from "react";
import ArrowRight from "../../../assets/Home-images/arrow-right.svg";
import styles from "./style.module.scss";
const ErrorHeader = () => {
  return (
    <div className={styles["error-header"]}>
      <div className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <div className={styles.transition}>
          <a href="#">Home</a>
          <img src={ArrowRight} alt="" />
          <h6>404</h6>
        </div>
      </div>
    </div>
  );
};

export default ErrorHeader;
