import React from 'react'
import styles from './style.module.scss'
import {Link} from 'react-router-dom'
const Logo = ({variant}) => {
  return (
    <Link to="/" className={styles.logo}>
      <h3
        className={
          variant === "white"
            ? `${styles.title} ${styles.white}`
            : variant === "black"
            ? `${styles.title} ${styles.black}`
            : `${styles.title}`
        }
      >
        Lovely
      </h3>
    </Link>
  );
}

export default Logo