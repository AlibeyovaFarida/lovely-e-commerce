import React from 'react'
import styles from './style.module.scss'
import Header from '../../layout/Header'
import Innovation from '../../components/Team/Innovation'
import TeamMembers from '../../components/Team/TeamMembers'
import Promotion from '../../components/Team/Promotion'
import Footer from '../../layout/Footer'
const Team = () => {
  return (
    <div className={styles.team}>
      <Header type="about" />
      <Innovation />
      <TeamMembers />
      <Promotion />
      <Footer variantFooter="light" variant="black" />
    </div>
  );
}

export default Team