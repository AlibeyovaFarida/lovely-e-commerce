import React from 'react'
import styles from './style.module.scss'
import ArrowRight from '../../../assets/Home-images/arrow-right.svg'
import TeamLeft from '../../../assets/Team-images/Team-left.svg'
import TeamRight1 from '../../../assets/Team-images/Team-right-1.svg'
import TeamRight2 from "../../../assets/Team-images/Team-right-2.svg";
import TeamRight3 from "../../../assets/Team-images/Team-right-3.svg";
import TeamRight4 from "../../../assets/Team-images/Team-right-4.svg";
const Innovation = () => {
  return (
    <div className={styles.innovation}>
      <div className={styles.container}>
        <div className={styles["innovation-header"]}>
          <h5>What we do</h5>
          <h1>Innovation tailored for you</h1>
          <div className={styles.transition}>
            <a href="#" className={styles.toHome}>
              Home
            </a>
            <img src={ArrowRight} alt="" />
            <a href="#" className={styles.toTeam}>
              Team
            </a>
          </div>
        </div>
        <div className={styles["innovation-main"]}>
          <div className={styles.left}>
            <img src={TeamLeft} alt="" />
          </div>
          <div className={styles.right}>
            <div>
              <img src={TeamRight1} alt="" />
            </div>
            <div>
              <img src={TeamRight2} alt="" />
            </div>
            <div>
              <img src={TeamRight3} alt="" />
            </div>
            <div>
              <img src={TeamRight4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Innovation