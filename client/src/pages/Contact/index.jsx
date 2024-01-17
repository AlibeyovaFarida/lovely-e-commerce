import React from 'react'
import styles from './style.module.scss'
import Header from '../../layout/Header'
import Preview from '../../components/Contact/Preview'
import Office from '../../components/Contact/Office'
import Meet from '../../components/Contact/Meet'
import Footer from '../../layout/Footer'
const Contact = () => {
  return (
    <div className={styles.contact}>
      <Header type="about" />
      <Preview />
      <Office />
      <Meet />
      <Footer variantFooter="light" variant="black" />
    </div>
  );
}

export default Contact