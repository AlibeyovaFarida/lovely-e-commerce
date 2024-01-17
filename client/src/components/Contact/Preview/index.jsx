import React from "react";
import styles from "./style.module.scss";
import Twitter from "../../../assets/Contact-images/twitter.svg";
import Facebook from "../../../assets/Contact-images/facebook.svg";
import Instagram from "../../../assets/Contact-images/instagram.svg";
import Linkedin from "../../../assets/Contact-images/linkedin.svg";
import Technology from '../../../assets/About-images/AboutProduct.svg'
const Preview = () => {
  return (
    <div className={styles.preview}>
      <div className={styles.container}>
        <div className={styles["contact-details"]}>
          <h5>Contact us</h5>
          <h1 className={styles.title}>Get in touch today!</h1>
          <h4 className={styles.desc}>
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </h4>
          <div className={styles["contact-number"]}>
            <h3 className={styles.phone}>Phone : +451 215 215 </h3>
            <h3 className={styles.fax}>Fax : +451 215 215</h3>
          </div>
          <div className={styles["social-media-accounts"]}>
            <div className={styles.twitter}>
              <img src={Twitter} alt="" />
            </div>
            <div className={styles.facebook}>
              <img src={Facebook} alt="" />
            </div>
            <div className={styles.instagram}>
              <img src={Instagram} alt="" />
            </div>
            <div className={styles.linkedin}>
              <img src={Linkedin} alt="" />
            </div>
          </div>
        </div>
        <div className={styles["contact-image"]}>
          <img src={Technology} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Preview;
