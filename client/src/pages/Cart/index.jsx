import React from 'react'
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import CartMain from '../../components/Cart/CartMain'
import styles from './style.module.scss'
const Cart = ({ quantity,setQuantity }) => {
  return (
    <div className={styles.cart}>
      <Header type="product" />
      <CartMain quantity={quantity} setQuantity={setQuantity} />
      <Footer variantFooter="light" variant="black" />
    </div>
  );
};

export default Cart