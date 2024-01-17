import React from 'react'
import VideoCardImage from '../../../assets/About-images/VideoCard.svg'
import Play from '../../../assets/icons/play-icon.svg'
import styles from './style.module.scss'
const VideoCard = () => {
  return (
    <div className={styles["video-card"]}>
      <div className={styles.container}>
        <div className={styles["video-wrapper"]}>
          <img src={VideoCardImage} alt="" />
        </div>
        <div className={styles["play-btn"]}>
          <img src={Play} alt="" />
        </div>
      </div>
    </div>
  );
}

export default VideoCard