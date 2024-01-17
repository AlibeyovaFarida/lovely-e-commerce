import React from 'react'
import styles from './style.module.scss'
import Header from '../../layout/Header'
import Newsletter from '../../components/Blog/Newsletter'
import Footer from '../../layout/Footer'
import BlogHeader from '../../components/BlogDetails/BlogHeader'
import FeaturedPosts from '../../components/BlogDetails/FeaturedPosts'
import BlogDetailsMain from '../../components/BlogDetails/BlogDetailsMain'
import KevinWilliam from '../../components/BlogDetails/KevinWilliam'
const BlogDetails = () => {
  return (
    <div className={styles["blog-details"]}>
      <Header type="about" />
      <BlogHeader />
      <BlogDetailsMain />
      <KevinWilliam />
      <FeaturedPosts />
      <Newsletter />
      <Footer variantFooter="light" variant="black" />
    </div>
  );
}

export default BlogDetails