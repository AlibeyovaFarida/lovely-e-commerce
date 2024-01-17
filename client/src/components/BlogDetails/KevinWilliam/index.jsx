import React from 'react'
import styles from './style.module.scss'
import KevinWilliamImage from '../../../assets/BlogDetails/KevinWilliam.svg'
const KevinWilliam = () => {
  return (
    <div className={styles["kevin-william"]}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img src={KevinWilliamImage} alt="" />
        </div>
        <div className={styles.desc}>
          <h3>Kevin William</h3>
          <p>
            Ali qua id Fiat nostrum inure ex door ea quit id quit ad et. Sent
            quit else painter door desert Mollie Dolores cilium minim temper
            ENIM. Elite acute inure temper cupidity incident sent desert UT
            voltage acute id desert Nisei. Ali qua id Fiat nostrum inure ex door
            ea quit id quit ad et. Sent quit else painter door desert Mollie
            Dolores cilium minim temper ENIM. Elite acute inure temper cupidity
            incident sent desert UT voltage acute id desert Nisei.
          </p>
        </div>
      </div>
    </div>
  );
}

export default KevinWilliam