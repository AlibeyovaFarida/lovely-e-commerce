import React from 'react'
import Header from '../../layout/Header';
import Sponsors from '../../components/Sponsors';
import Footer from '../../layout/Footer';
import ProductAbout from '../../components/ProductDetails/ProductAbout'
// import ProductInformation from '../../components/ProductDetails/ProductInformation'
import Review from '../../components/ProductDetails/Reviews'
import Bestseller from '../../components/ProductDetails/Bestseller'
import styles from './style.module.scss'
import { useEffect,useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductDetails = ({quantity, setQuantity}) => {
  const topRef = useRef(null);
  const id = useParams().id
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [id]);
  // console.log(id);
  return (
    <div className={styles["product-details"]} ref={topRef}>
      <Header type="product" />
      <ProductAbout id={id} quantity={quantity} setQuantity={setQuantity} />
      {/* <ProductInformation /> */}
      <Review />
      <Bestseller />
      <Sponsors />
      <Footer variantFooter="light" variant="black" />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default ProductDetails