import React from "react";
import PreviewWrapper from "../../../assets/Home-images/preview-wrapper.svg";
import JobSecurityIcon from "../../../assets/Home-images/job-security-icon.svg";
import styles from "./style.module.scss";
const HomePreview = () => {
  return (
    <div className={styles["home-preview"]}>
      <div className={styles.container}>
        <div className={styles["preview-text"]}>
          <h5 className={styles.date}>summer 2020</h5>
          <h1 className={styles["preview-title"]}>
            make your skin shine & fresh
          </h1>
          <p className={styles["preview-desc"]}>
            We know how large objects will act, but things on a small scale.
          </p>
          <button className={styles["preview-details-btn"]}>Read More</button>
        </div>
        <div className={styles["preview-wrapper"]}>
          <img src={PreviewWrapper} alt="" />
        </div>
        <div className={styles["job-security"]}>
          {[1, 2, 3].map((num) => {
            return (
              <div className={styles["job-security-card"]} key={num}>
                <div className={styles.icon}>
                  <img src={JobSecurityIcon} alt="" />
                </div>
                <h3 className={styles.title}>Job Security</h3>
                <p className={styles.desc}>
                  the quick fox jumps over the lazy dog
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePreview;
