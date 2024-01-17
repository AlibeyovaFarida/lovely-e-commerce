import React from 'react'
import styles from './style.module.scss'
import BlogTemp from "../../../assets/Blog-images/BlogTemp.svg";
import Clock from "../../../assets/icons/clock-icon.svg";
import Diagram from "../../../assets/icons/diagram-icon.svg";
import ArrowRight from "../../../assets/Error-images/arrow-right.svg";
import {Link} from 'react-router-dom'
const FeaturedPosts = () => {
  return (
    <div className={styles["featured-posts"]}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Posts</h2>
        <div className={styles["blog-cards"]}>
          {[1, 2, 3].map((num) => {
            return (
              <div className={styles["blog-card"]} key={num}>
                <div className={styles["blog-card-wrapper"]}>
                  <img src={BlogTemp} alt="" />
                  <h6>NEW</h6>
                </div>
                <div className={styles["blog-card-details"]}>
                  <ul className={styles.categories}>
                    <li className={styles.active}>Google</li>
                    <li>Trending</li>
                    <li>New</li>
                  </ul>
                  <h4 className={styles.title}>
                    Loudest à la Madison #1 (L'integral)
                  </h4>
                  <p className={styles.desc}>
                    We focus on ergonomics and meeting you where you work. It's
                    only a keystroke away.
                  </p>
                  <div className={styles["date-comment"]}>
                    <div className={styles.date}>
                      <img src={Clock} alt="" />
                      <span>22 April 2021</span>
                    </div>
                    <div className={styles.comment}>
                      <img src={Diagram} alt="" />
                      <span>10 comments</span>
                    </div>
                  </div>
                  <div className={styles["transitions-blog-details"]}>
                    <Link to="/blog/details">Learn more</Link>
                    <img src={ArrowRight} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FeaturedPosts