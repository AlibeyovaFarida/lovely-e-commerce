import React from "react";
import ArrowRight from "../../../assets/Home-images/right-btn.svg";
import styles from "./style.module.scss";
import {getCategories} from '../../../api/categories'
import { useEffect } from "react";
import { useState } from "react";
import {Link, useSearchParams} from 'react-router-dom'
import { useDispatch } from "react-redux";
import {selectCategory} from '../../../features/filterSlice'

const ShopDropDown = () => {
  const dispatch = useDispatch();
  const [categoryData, setCategoryData] = useState([]); //buna dəymə
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const getAllCategories = async () => {
      const data = await getCategories();
      setCategoryData(data.data);
    };
    getAllCategories();
  }, []); 

  const handleSelectCategory = (category) => {
    dispatch(selectCategory(category));

    searchParams.set("category", category);
    setSearchParams(searchParams)
  };
  return (
    <div className={styles["shop-dropdown"]}>
      <div className={styles.container}>
        <div className={styles["dropdown-header"]}>
          <h3 className={styles.title}>Shop</h3>
          <div className={styles.transitions}>
            <Link to="/">Home</Link>
            <img src={ArrowRight} alt="" />
            <h6>Shop</h6>
          </div>
        </div>
      </div>
      <div className={styles.categories}>
        {categoryData.map((category) => {
          return (
            <button
              className={styles.category}
              key={category.id}
              onClick={() => handleSelectCategory(category?.attributes?.title)}
            >
              <div className={styles["category-wrapper"]}>
                <img
                  src={`${import.meta.env.VITE_UPLOAD_IMG}${
                    category.attributes.image.data.attributes.url
                  }`}
                  alt=""
                />
              </div>
              <div className={styles["category-details"]}>
                <h3 className={styles["category-name"]}>
                  {category.attributes.title}
                </h3>
                <p className={styles["products-count"]}>
                  {category.attributes.count} Items
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ShopDropDown;
