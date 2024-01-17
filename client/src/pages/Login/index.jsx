import React from 'react'
import styles from './style.module.scss'
import Header from "../../layout/Header";
import LoginMain from '../../components/LoginMain'
import Footer from "../../layout/Footer";
const Login = () => {
  return (
    <div className={styles.login}>
      <Header type="about" />
      <LoginMain />
      <Footer variant="white" />
    </div>
  );
}

export default Login