import React from 'react'
import Hooli from '../../assets/Sponsors-images/hooli.svg'
import Lyft from '../../assets/Sponsors-images/lyft.svg'
import PiperHat from '../../assets/Sponsors-images/piper-hat.svg'
import Stripe from '../../assets/Sponsors-images/stripe.svg'
import AWS from '../../assets/Sponsors-images/aws.svg'
import RedditAlien from '../../assets/Sponsors-images/reddit-alien.svg'
import styles from './style.module.scss'
const Sponsors = () => {
  return (
    <div className={styles.sponsors}>
      <div className={styles.container}>
        <div className={styles.hooli}>
          <img src={Hooli} alt="" />
        </div>
        <div className={styles.lyft}>
          <img src={Lyft} alt="" />
        </div>
        <div className={styles.piperHat}>
          <img src={PiperHat} alt="" />
        </div>
        <div className={styles.stripe}>
          <img src={Stripe} alt="" />
        </div>
        <div className={styles.aws}>
          <img src={AWS} alt="" />
        </div>
        <div className={styles.redditAlien}>
          <img src={RedditAlien} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sponsors