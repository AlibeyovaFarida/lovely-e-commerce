import React from 'react'
import VacancyImage from '../../../assets/About-images/Vacancy.svg'
import styles from './style.module.scss'
const Vacancy = () => {
  return (
    <div className={styles.vacancy}>
      <div className={styles.container}>
        <div className={styles["vacancy-desc"]}>
          <h5>work with us</h5>
          <h2>Now Let’s grow Yours</h2>
          <p>
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </p>
          <button>Button</button>
        </div>
        <div className={styles["vacancy-wrapper"]}>
          <img src={VacancyImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Vacancy