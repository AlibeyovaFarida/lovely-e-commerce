import React from "react";
import ErrorWrapper from "../../../assets/Error-images/Error-wrapper.svg";
import ArrowLeft from "../../../assets/Error-images/arrow-left.svg";
import ArrowRight from "../../../assets/Error-images/arrow-right.svg";
import styles from "./style.module.scss";
import {Link} from 'react-router-dom'
const ErrorMain = () => {
  return (
    <div className={styles["error-main"]}>
      <div className={styles.container}>
        <div className={styles["error-wrapper"]}>
          <img src={ErrorWrapper} alt="" />
        </div>
        <div className={styles["error-details"]}>
          <h2 className={styles.title}>Oops...</h2>
          <h4 className={styles.desc}>
            We can’t seem to find the page you’re looking for.
          </h4>
          <button className={styles["go-home"]}>
            <img src={ArrowLeft} alt="" />
            <span>Back to Home</span>
          </button>
        </div>
        <h3>Are you looking for...</h3>
        <div className={styles.transitions}>
          <div className={styles.home}>
            <img src={ArrowRight} alt="" />
            <Link to="/">Home</Link>
          </div>
          <div className={styles.blog}>
            <img src={ArrowRight} alt="" />
            <Link to='/blog'>Blog</Link>
          </div>
          <div className={styles.contact}>
            <img src={ArrowRight} alt="" />
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMain;
