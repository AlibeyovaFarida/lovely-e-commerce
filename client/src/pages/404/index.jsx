import React from 'react'
import styles from './style.module.scss'
import Header from '../../layout/Header'
import ErrorHeader from '../../components/404/ErrorHeader'
import ErrorMain from '../../components/404/ErrorMain'
import Footer from '../../layout/Footer'
const Error = () => {
  return (
    <div className={styles.error}>
      <Header type="about" />
      <ErrorHeader />
      <ErrorMain />
      <Footer variant="white" />
    </div>
  );
}

export default Error