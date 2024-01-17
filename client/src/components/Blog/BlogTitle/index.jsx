import React from "react";
import styles from "./style.module.scss";
import ArrowRight from "../../../assets/Home-images/arrow-right.svg";
const BlogTitle = () => {
  return (
    <div className={styles["blog-title"]}>
      <div className={styles.container}>
        <h5>learn with us</h5>
        <h1 className={styles.title}>The Blog</h1>
        <div className={styles.transitions}>
          <a href="">Home</a>
          <img src={ArrowRight} alt="" />
          <h6>Blog</h6>
        </div>
      </div>
    </div>
  );
};

export default BlogTitle;
