import React from "react";
import BurgerMenu from "../../../assets/Home-images/burger-menu.svg";
import ArrowDown from "../../../assets/icons/arrow-down-icon.svg";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
const HomeNavbar = ({type}) => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false)
  const handleOpenMenu = () => {
    setShowBurgerMenu(!showBurgerMenu);
  }
  return (
    <div className={styles.homeNavbar}>
      <div className={styles.burgerMenu}>
        <button className={styles.burgerBtn} onClick={handleOpenMenu}>
          <img src={BurgerMenu} alt="" />
        </button>
      </div>
      <div
        className={
          !showBurgerMenu
            ? `${styles.navList}`
            : `${styles.navList} ${styles.active}`
        }
      >
        <ul
          className={
            type === "home"
              ? `${styles.navListItems}`
              : `${styles.navListItems} ${styles.navListItemsAbout}`
          }
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className={styles.registrations}>
          <button
            className={
              type === "home"
                ? `${styles.login}`
                : `${styles.login} ${styles.loginAbout}`
            }
          >
            <Link to="/login">Login</Link>
          </button>
          <button className={styles.register}>
            <Link to="/signup">
              <span>Become a member</span>
              <img src={ArrowDown} alt="" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
