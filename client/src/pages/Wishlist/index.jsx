import React from 'react'
import styles from './style.module.scss'
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import WishlistProducts from '../../components/Wishlist/WishlistProducts';
const Wishlist = () => {
  return (
    <div className={styles.wishlist}>
      <Header type="product" />
      <WishlistProducts />
      <Footer variantFooter="light" variant="black" />
    </div>
  );
}

export default Wishlist