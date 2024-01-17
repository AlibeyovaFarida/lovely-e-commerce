import React from 'react'
import styles from './style.module.scss'
import ArrowRight from '../../../assets/Home-images/arrow-right.svg'
const BlogHeader = () => {
  return (
    <div className={styles["blog-header"]}>
      <div className={styles.container}>
        <div className={styles.transitions}>
          <a href="">Home</a>
          <img src={ArrowRight} alt="" />
          <h6>Blog</h6>
        </div>
        <h2 className={styles.title}>Why is Figma crashing?</h2>
        <h4 className={styles.desc}>
          We know how large objects will act, but things on a small scale.
        </h4>
      </div>
    </div>
  );
}

export default BlogHeader