import React from "react";
import styles from "./style.module.scss";
import LeftBtn from "../../../assets/Home-images/left-btn.svg";
import RightBtn from "../../../assets/Home-images/right-btn.svg";
import { useState } from "react";
import { useEffect } from "react";
import { getBestsellerProducts } from "../../../api/bestsellerProducts";
import {Link} from 'react-router-dom'
const BestsellerFilteredProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("Make Up");
  const [filteredBestSellerProducts, setFilteredBestSellerProducts] = useState([]);
  const categories = ["Make Up", "Hair Care", "Skin Care", "Perfume"];
  
  const handleSelect = (e) => {
    setSelectedCategory(e.target.textContent);
  };

  useEffect(() => {
    const getAllBestsellerProducts = async () => {
      let data = await getBestsellerProducts();
      if (selectedCategory !== "All") {
        data = data.filter(
          (product) =>
            product?.attributes?.categories?.data[0]?.attributes?.title ===
            selectedCategory
        );
      }
      setFilteredBestSellerProducts(data);
    };
    getAllBestsellerProducts();
  }, [selectedCategory]);
  // console.log(filteredBestSellerProducts);
  return (
    <div className={styles["bestseller-filtered-products"]}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>Bestseller Products</h3>
          <div className={styles.filterezation}>
            <ul className={styles.categories}>
              <li>
                <button
                  className={
                    selectedCategory == "Make Up" ? `${styles.active}` : ""
                  }
                  onClick={handleSelect}
                >
                  Make Up
                </button>
              </li>
              <li>
                <button
                  className={
                    selectedCategory == "Hair Care" ? `${styles.active}` : ""
                  }
                  onClick={handleSelect}
                >
                  Hair Care
                </button>
              </li>
              <li>
                <button
                  className={
                    selectedCategory === "Skin Care" ? `${styles.active}` : ""
                  }
                  onClick={handleSelect}
                >
                  Skin Care
                </button>
              </li>
              <li>
                <button
                  className={
                    selectedCategory == "Perfume" ? `${styles.active}` : ""
                  }
                  onClick={handleSelect}
                >
                  Perfume
                </button>
              </li>
            </ul>
            <div className={styles.btns}>
              <button
                className={styles.prev}
                onClick={() =>
                  setSelectedCategory((c) => {
                    if (c != categories[0])
                      return (c = categories[categories.indexOf(c) - 1]);
                    else return (c = categories[categories.length-1]);
                  })
                }
              >
                <img src={LeftBtn} alt="" />
              </button>
              <button
                className={styles.next}
                onClick={() =>
                  setSelectedCategory((c) => {
                    if (c != categories[categories.length - 1])
                      return (c = categories[categories.indexOf(c) + 1]);
                    else return (c = categories[0]);
                  })
                }
              >
                <img src={RightBtn} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.products}>
          {filteredBestSellerProducts.map((product) => {
            return (
              <Link to={`product/${product.id}`} className={styles.product} key={product.id}>
                <div className={styles["product-image"]}>
                  <img
                    src={`${import.meta.env.VITE_UPLOAD_IMG}${
                      product.attributes.images.data[0].attributes.url
                    }`}
                    alt=""
                  />
                </div>
                <div className={styles["product-desc"]}>
                  <h5 className={styles.title}>{product?.attributes?.title}</h5>
                  <p className={styles.category}>
                    {
                      product?.attributes?.categories?.data[0]?.attributes
                        ?.title
                    }
                  </p>
                  <div className={styles.prices}>
                    <span className={styles["old-price"]}>
                      ${product?.attributes?.oldprice}
                    </span>
                    <span className={styles["new-price"]}>
                      ${product?.attributes?.newprice}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestsellerFilteredProducts;
