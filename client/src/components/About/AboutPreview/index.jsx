import React from 'react'
import AboutProduct from '../../../assets/About-images/AboutProduct.svg'
import styles from './style.module.scss'
const AboutPreview = () => {
  return (
    <div className={styles["about-preview"]}>
      <div className={styles.container}>
        <div className={styles["preview-details"]}>
          <h5 className={styles.company}>About Company</h5>
          <h1 className={styles.title}>About us</h1>
          <h4 className={styles.desc}>
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </h4>
          <button>Get Quote Now</button>
        </div>
        <div className={styles['preview-wrapper']}>
          <img src={AboutProduct} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutPreview