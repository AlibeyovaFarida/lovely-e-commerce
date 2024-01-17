import React from "react";
import Logo from "../../components/Logo";
import HomeNavbar from "../../components/Home/HomeNavbar";
import ProductNavbar from "../../components/Product/ProductNavbar";
import styles from "./style.module.scss";
import { userData } from "../../services/helpers";
const Header = ({type}) => {
   const { jwt } = userData();
  return (
    <div
      className={
        type === "home"
          ? `${styles.homeHeader} ${styles.homeBg}`
          : `${styles.homeHeader}`
      }
    >
      <div className={styles.container}>
        <Logo />
        {(jwt) ? <ProductNavbar /> : <HomeNavbar/>}
      </div>
    </div>
  );
};

export default Header;
