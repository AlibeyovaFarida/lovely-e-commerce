import React from "react";
import styles from "./style.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleChange } from "../../../features/filterSlice";
import {getAllSubCategories} from "../../../features/filterSlice";
const Filter = ({
  showFilterDropdown,
}) => {
  
  const dispatch = useDispatch();
  const { selectedCategory, selectedSubCategories, subCategories } =
    useSelector((state) => state.filteredProducts.filteredProducts);

  useEffect(() => {
    dispatch(getAllSubCategories({ selectedCategory }))
  }, [selectedCategory]);

  const handleSubCategoriesChange = (e) => {
    const value = e.target.defaultValue;
    const isChecked = e.target.checked;
    dispatch(handleChange({value, isChecked}))
  };
  return (
    <div
      className={
        showFilterDropdown
          ? `${styles.filter}`
          : `${styles.filter} ${styles.hide}`
      }
    >
      <div className={styles.container}>
        <div className={styles["filter-by-brand"]}>
          <h5>Filter By Brand</h5>
          <ul className={styles["brands"]}>
            {subCategories.data?.map((sb) => {
              return (
                <li key={sb.id}>
                  <input
                    type="checkbox"
                    name=""
                    id={sb.attributes.title}
                    value={sb.attributes.title}
                    onChange={(e) => {
                      handleSubCategoriesChange(e)
                    }}
                    checked={selectedSubCategories.includes(sb.attributes.title)}
                  />
                  <label htmlFor={sb.attributes.title}>
                    {sb.attributes.title}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
