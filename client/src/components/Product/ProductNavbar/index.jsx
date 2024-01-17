import React from "react";
import styles from "./style.module.scss";
import { useState } from "react";
import BurgerMenu from "../../../assets/Home-images/burger-menu.svg";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SearchIcon from "../../../assets/icons/search-icon.svg";
import CartIcon from "../../../assets/icons/cart-icon.svg";
import HeartIcon from "../../../assets/icons/heart-icon.svg";
import { useSelector } from "react-redux";
const ProductNavbar = () => {
  const navigate = useNavigate()
  const products = useSelector((state) => state.cart.products);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const { wishProducts } = useSelector((state) => state.wishlist);
  const handleOpenMenu = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };
  const logout = () => {
    localStorage.setItem("user", "")
    navigate('/login')
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
        <ul className={styles.navListItems}>
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/product">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/team">Team</NavLink>
          </li>
        </ul>
        <div className={styles["user-operations"]}>
          <div className={styles.icons}>
            <Link to="/cart" className={styles.cart}>
              <img src={CartIcon} alt="" />
              <span>{products.length}</span>
            </Link>
            <Link to="/wishlist" className={styles.wishlist}>
              <img src={HeartIcon} alt="" />
              <span>{wishProducts.length}</span>
            </Link>
          </div>
          <button className={styles.logout} onClick={logout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductNavbar;
