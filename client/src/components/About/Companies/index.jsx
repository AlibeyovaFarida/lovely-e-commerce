import React from 'react'
import styles from './style.module.scss'
import Sponsors from '../../Sponsors'
const Companies = () => {
  return (
    <div className={styles.companies}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Big Companies Are Here</h2>
          <p className={styles.desc}>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <Sponsors/>
      </div>
    </div>
  );
}

export default Companies