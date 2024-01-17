import React from 'react'
import styles from './style.module.scss'
const Statistics = () => {
  return (
    <div className={styles.statistics}>
      <div className={styles.container}>
        <div className={styles.customers}>
          <h1>15K</h1>
          <h5>Happy Customers</h5>
        </div>
        <div className={styles.visitors}>
          <h1>150K</h1>
          <h5>Monthly Visitors</h5>
        </div>
        <div className={styles.countries}>
          <h1>15</h1>
          <h5>Countries Worldwide</h5>
        </div>
        <div className={styles.customers}>
          <h1>100+</h1>
          <h5>Top Partners</h5>
        </div>
      </div>
    </div>
  );
}

export default Statistics