import React from 'react'
import styles from './style.module.scss'
import Twitter from '../../../assets/Team-images/twitter.svg'
import Facebook from '../../../assets/Team-images/facebook.svg'
import Instagram from '../../../assets/Team-images/instagram.svg'
import Linkedin from '../../../assets/Team-images/linkedin.svg'
const Promotion = () => {
  return (
    <div className={styles.promotion}>
      <div className={styles.container}>
        <h2 className={styles.title}>Start your 14 days free trial</h2>
        <p className={styles.desc}>
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button>Try it free now</button>
        <div className={styles["sosial-media-accounts"]}>
          <div className={styles.twitter}>
            <img src={Twitter} alt="" />
          </div>
          <div className={styles.facebook}>
            <img src={Facebook} alt="" />
          </div>
          <div className={styles.instagram}>
            <img src={Instagram} alt="" />
          </div>
          <div className={styles.linkedin}>
            <img src={Linkedin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotion