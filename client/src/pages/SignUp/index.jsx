import React from 'react'
import styles from './style.module.scss'
import Header from '../../layout/Header'
import Register from '../../components/SignUp/Register'
import Footer from '../../layout/Footer'
const SignUp = () => {
  return (
    <div className={styles["sign-up"]}>
      <Header type="about" />
      <Register />
      <Footer variant="white" />
    </div>
  );
}

export default SignUp;