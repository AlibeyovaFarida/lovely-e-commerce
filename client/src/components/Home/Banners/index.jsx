import React from "react";
import styles from "./style.module.scss";
import {Link} from 'react-router-dom'
const Banners = () => {
  return (
    <div className={styles.banners}>
      <div className={styles.container}>
        <div className={styles["banner-1"]}>
          <div className={styles["banner-desc"]}>
            <p>SKY High</p>
            <h3>Mascara</h3>
            <Link to="/product/11">Explore Items</Link>
          </div>
        </div>
        <div className={styles["banner-2"]}>
          <div className={styles["banner-desc"]}>
            <p>Eyeshadow</p>
            <h3>Palette</h3>
            <Link to="/product/9">Explore Items</Link>
          </div>
        </div>
        <div className={styles["banner-3"]}>
          <div className={styles["banner-desc"]}>
            <p>Super Stay</p>
            <h3>Lipstick</h3>
            <Link to="/product/10">Explore Items</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
