import React from 'react'
import styles from './style.module.scss'
import TempNewProduct from '../../../assets/Home-images/temp-product.svg'
import NewProductBg1 from '../../../assets/Home-images/new-product-bg-1.jpg'
import NewProductBg2 from '../../../assets/Home-images/new-product-bg-2.jpg'
const NewProducts = () => {
  return (
    <div className={styles["new-products"]}>
      <div className={styles.container}>
        <div className={styles["product-one"]}>
          <div className={styles.wrapper}>
            <img src={NewProductBg1} alt="" />
          </div>
          <div className={styles.desc}>
            <p>Ends Today</p>
            <h2>Elements Style</h2>
            <a href="#">Explore Items</a>
          </div>
        </div>
        <div className={styles["product-two"]}>
          <div className={styles.wrapper}>
            <img src={NewProductBg2} alt="" />
          </div>
          <div className={styles.desc}>
            <p>Your Space</p>
            <h2>Unique Life</h2>
            <a href="#">Explore Items</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProducts