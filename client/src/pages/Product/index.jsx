import React from "react";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilteredProducts } from "../../api/filteredCategories";
import {getFilteredProductsAccordingCategories} from "../../features/filterSlice";
import Header from "../../layout/Header";
import ShopDropDown from "../../components/Product/ShopDropdown";
import ProductList from "../../components/Product/ProductList";
import Sponsors from "../../components/Sponsors";
import Footer from "../../layout/Footer";
import styles from "./style.module.scss";

const Product = () => {
  const dispatch = useDispatch();
  const topRef = useRef(null);
  const {
    selectedCategory,
    selectedSubCategories,
    pageNum,
    sort,
    searchProduct,
  } = useSelector((state) => state.filteredProducts.filteredProducts);
  useEffect(() => {
    dispatch(
      getFilteredProductsAccordingCategories({
        pageNum,
        selectedCategory,
        selectedSubCategories,
        sort,
        searchProduct,
      })
    );
  }, [selectedCategory, pageNum, selectedSubCategories, sort, searchProduct]);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [pageNum]);
  return (
    <div className={styles.product} ref={topRef}>
      <Header type="product" />
      <ShopDropDown />
      <ProductList />
      <Sponsors />
      <Footer variantFooter="light" variant="black" />
    </div>
  );
};

export default Product;
