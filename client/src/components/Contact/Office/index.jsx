import React from "react";
import styles from "./style.module.scss";
import Phone from "../../../assets/Contact-images/phone.svg";
import Location from "../../../assets/Contact-images/location.svg";
import Message from "../../../assets/Contact-images/message.svg";
const Office = () => {
  return (
    <div className={styles.office}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h6>visit our office</h6>
          <h2>We help small businesses with big ideas</h2>
        </div>
        <div className={styles.main}>
          <div className={styles["card-1"]}>
            <div className={styles.icon}>
              <img src={Phone} alt="" />
            </div>
            <div className={styles.mails}>
              <h6>georgia.young@example.com</h6>
              <h6>georgia.young@ple.com</h6>
            </div>
            <h5>Get Support</h5>
            <button>Submit Request</button>
          </div>
          <div className={styles["card-2"]}>
            <div className={styles.icon}>
              <img src={Location} alt="" />
            </div>
            <div className={styles.mails}>
              <h6>georgia.young@example.com</h6>
              <h6>georgia.young@ple.com</h6>
            </div>
            <h5>Get Support</h5>
            <button>Submit Request</button>
          </div>
          <div className={styles["card-3"]}>
            <div className={styles.icon}>
              <img src={Message} alt="" />
            </div>
            <div className={styles.mails}>
              <h6>georgia.young@example.com</h6>
              <h6>georgia.young@ple.com</h6>
            </div>
            <h5>Get Support</h5>
            <button>Submit Request</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Office;
