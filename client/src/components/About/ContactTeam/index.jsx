import React from "react";
import User1 from "../../../assets/About-images/User-1.svg";
import User2 from "../../../assets/About-images/User-2.svg";
import User3 from "../../../assets/About-images/User-3.svg";
import Facebook from "../../../assets/icons/facebook-icon.svg";
import Instagram from "../../../assets/icons/instagram-icon.svg";
import Twitter from "../../../assets/icons/twitter-icon.svg";
import styles from "./style.module.scss";
const ContactTeam = () => {
  return (
    <div className={styles["contact-team"]}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Meet Our Team</h2>
          <p className={styles.desc}>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className={styles["team-members"]}>
          <div className={styles.member}>
            <div className={styles["member-image"]}>
              <img src={User1} alt="" />
            </div>
            <div className={styles["member-details"]}>
              <h5 className={styles.username}>Username</h5>
              <h6 className={styles.profession}>Profession</h6>
              <div className={styles["social-media-accounts"]}>
                <div className={styles.facebook}>
                  <img src={Facebook} alt="" />
                </div>
                <div className={styles.instagram}>
                  <img src={Instagram} alt="" />
                </div>
                <div className={styles.twitter}>
                  <img src={Twitter} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.member}>
            <div className={styles["member-image"]}>
              <img src={User2} alt="" />
            </div>
            <div className={styles["member-details"]}>
              <h5 className={styles.username}>Username</h5>
              <h6 className={styles.profession}>Profession</h6>
              <div className={styles["social-media-accounts"]}>
                <div className={styles.facebook}>
                  <img src={Facebook} alt="" />
                </div>
                <div className={styles.instagram}>
                  <img src={Instagram} alt="" />
                </div>
                <div className={styles.twitter}>
                  <img src={Twitter} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.member}>
            <div className={styles["member-image"]}>
              <img src={User3} alt="" />
            </div>
            <div className={styles["member-details"]}>
              <h5 className={styles.username}>Username</h5>
              <h6 className={styles.profession}>Profession</h6>
              <div className={styles["social-media-accounts"]}>
                <div className={styles.facebook}>
                  <img src={Facebook} alt="" />
                </div>
                <div className={styles.instagram}>
                  <img src={Instagram} alt="" />
                </div>
                <div className={styles.twitter}>
                  <img src={Twitter} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTeam;
