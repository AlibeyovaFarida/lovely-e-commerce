import React from 'react'
import styles from './style.module.scss'
const ProductInformation = () => {
  return (
    <div className={styles["product-information"]}>
      <div className={styles.container}>
        <div className={styles["information-tabs"]}>
          <button className={`${styles['desc-tab']} ${styles['active']}`}>Description</button>
          <button className={styles['additional-inform-tab']}>Additional Information</button>
          <button className={styles['review-tab']}>Reviews <span className={styles['review-count']}>(0)</span></button>
        </div>
      </div>
    </div>
  );
}

export default ProductInformation