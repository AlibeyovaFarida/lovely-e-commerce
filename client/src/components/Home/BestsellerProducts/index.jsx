import React from "react";
import styles from "./style.module.scss";
import TempProduct from "../../../assets/Home-images/temp-product.svg";
import { useState } from "react";
import {getBestsellerProducts} from '../../../api/bestsellerProducts'
import { useEffect } from "react";
import {Link, useParams} from 'react-router-dom'
const BestsellerProducts = () => {
  const [bestsellerProducts,setBestsellerProducts] = useState([])
  const [bestsellerCounts, setBestsellerCounts] = useState(8)
  const id = useParams().id
  useEffect(() => {
    const getAllBestsellerProducts = async () => {
      const data = await getBestsellerProducts();
      setBestsellerProducts(data)
    }
    getAllBestsellerProducts()
  },[])
  
  return (
    <div className={styles["bestseller-products"]}>
      <div className={styles.container}>
        <h3 className={styles.title}>Bestseller products</h3>
        <div className={styles.products}>
          {bestsellerProducts.slice(0, bestsellerCounts).map((product) => {
            return (
              <Link
                to={`product/${product.id}`}
                className={styles.product}
                key={product.id}
              >
                <h5 className={styles["product-title"]}>
                  {product.attributes.title}
                </h5>
                <p className={styles["product-categories"]}>
                  {product.attributes.categories.data[0].attributes.title}
                </p>
                <div className={styles["product-wrapper"]}>
                  <img
                    src={`${import.meta.env.VITE_UPLOAD_IMG}${
                      product.attributes.images.data[0].attributes.url
                    }`}
                    alt=""
                  />
                </div>
                <h6 className={styles.price}>
                  {product.attributes.newprice} $
                </h6>
              </Link>
            );
          })}
        </div>
        {bestsellerCounts === 8 ? (
          <button
            className={styles["count-btn"]}
            onClick={() => setBestsellerCounts(bestsellerProducts.length)}
          >
            Show more...
          </button>
        ) : (
          <button
            className={styles["count-btn"]}
            onClick={() => setBestsellerCounts(8)}
          >
            Show less...
          </button>
        )}
      </div>
    </div>
  );
};

export default BestsellerProducts;
