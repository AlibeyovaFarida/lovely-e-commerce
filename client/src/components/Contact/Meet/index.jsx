import React from 'react'
import styles from './style.module.scss'
import Arrow from '../../../assets/Contact-images/arrow.svg'
const Meet = () => {
  return (
    <div className={styles.meet}>
      <div className={styles.container}>
        <div className={styles.arrow}>
          <img src={Arrow} alt="" />
        </div>
        <div className={styles["meet-details"]}>
          <h5>WE Can't WAIT TO MEET YOU</h5>
          <h1>Let’s Talk</h1>
          <button>Try it free now</button>
        </div>
      </div>
    </div>
  );
}

export default Meet