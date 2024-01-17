import React from 'react'
import styles from './style.module.scss'
const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h3 className={styles.title}>Subscribe For Latest Newsletter</h3>
          <p className={styles.desc}>
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th{" "}
          </p>
        </div>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Newsletter