import React from 'react'
import styles from './style.module.scss'
import Header from '../../layout/Header'
import AboutPreview from '../../components/About/AboutPreview'
import Problems from '../../components/About/Problems'
import Statistics from '../../components/About/Statistics'
import VideoCard from '../../components/About/VideoCard'
import ContactTeam from '../../components/About/ContactTeam'
import Companies from '../../components/About/Companies'
import Vacancy from '../../components/About/Vacancy'
import Footer from '../../layout/Footer'
const About = () => {
  return (
    <div className={styles.about}>
      <Header type="about" />
      <AboutPreview />
      <Problems />
      <Statistics />
      <VideoCard />
      <ContactTeam />
      <Companies />
      <Vacancy />
      <Footer variantFooter="light" variant="black" />
    </div>
  );
}

export default About