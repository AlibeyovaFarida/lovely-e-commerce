import React from 'react'
import styles from './style.module.scss'
import Logo from '../../components/Logo'
import Facebook from '../../assets/icons/facebook-icon.svg'
import Instagram from '../../assets/icons/instagram-icon.svg'
import Twitter from '../../assets/icons/twitter-icon.svg'
const Footer = ({variantFooter,variant}) => {
  return (
    <div
      className={
        variantFooter === "light"
          ? `${styles.footer} ${styles["footer-light"]}`
          : `${styles.footer}`
      }
    >
      <div className={styles.container}>
        <div className={styles["footer-header"]}>
          <Logo variant={variant} />
          <div className={styles["social-media"]}>
            <a href="#">
              <img src={Facebook} alt="" />
            </a>
            <a href="#">
              <img src={Instagram} alt="" />
            </a>
            <a href="#">
              <img src={Twitter} alt="" />
            </a>
          </div>
        </div>
        <div className={styles["footer-main"]}>
          <div className={styles["company-info"]}>
            <h5>Company Info</h5>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className={styles["legal"]}>
            <h5>Legal</h5>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className={styles["features"]}>
            <h5>Features</h5>
            <ul>
              <li>
                <a href="#">Business Marketing</a>
              </li>
              <li>
                <a href="#">User Analytic</a>
              </li>
              <li>
                <a href="#">Live Chat</a>
              </li>
              <li>
                <a href="#">Unlimited Support</a>
              </li>
            </ul>
          </div>
          <div className={styles["resources"]}>
            <h5>Resources</h5>
            <ul>
              <li>
                <a href="#">IOS & Android</a>
              </li>
              <li>
                <a href="#">Watch a Demo</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>
          <div className={styles["get-in-touch"]}>
            <h5>Get In Touch</h5>
            <form action="">
              <input type="email" />
              <button>Subscribe</button>
            </form>
            <span>Lore imp sum dolor Amit</span>
          </div>
        </div>
        <div className={styles["footer-bottom"]}>
          <p>Made With Love By Finland All Right Reserved </p>
        </div>
      </div>
    </div>
  );
}

export default Footer