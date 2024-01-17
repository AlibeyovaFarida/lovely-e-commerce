import React from 'react'
import styles from './style.module.scss'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer'
import BlogTitle from '../../components/Blog/BlogTitle'
import BlogList from '../../components/Blog/BlogList'
import Newsletter from '../../components/Blog/Newsletter'
const Blog = () => {
  return (
    <div className={styles.blog}>
      <Header type="about" />
      <BlogTitle />
      <BlogList />
      <Newsletter />
      <Footer variant="white" />
    </div>
  );
}

export default Blog