import React from 'react'
import styles from './style.module.scss'
import { useEffect } from 'react'
import {getBestsellerProducts} from '../../../api/bestsellerProducts'
import { useState } from 'react'
import {Link} from 'react-router-dom'
const Bestseller = () => {
  const [bestsellerProducts, setBestsellerProducts] = useState([])
  useEffect(() => {
    const getAllBestSellerproducts = async() => {
      const data = await getBestsellerProducts()
      // console.log(data);
      setBestsellerProducts(data)
    }
    getAllBestSellerproducts()
  },[])
  // console.log(bestsellerProducts);
  return (
    <div className={styles["bestseller"]}>
      <div className={styles.container}>
        <h3 className={styles.bestTitle}>Bestseller products</h3>
        <div className={styles.products}>
          {bestsellerProducts.map((product) => {
            return (
              <Link to={`/product/${product.id}`} className={styles.product} key={product.id}>
                <div className={styles["product-image"]}>
                  <img
                    src={`${import.meta.env.VITE_UPLOAD_IMG}${
                      product?.attributes?.images?.data[0]
                        ?.attributes?.url
                    }`}
                    alt=""
                  />
                </div>
                <div className={styles["product-details"]}>
                  <h5 className={styles.title}>{product.attributes.title}</h5>
                  <p className={styles.category}>
                    {product.attributes.categories.data[0].attributes.title}
                  </p>
                  <div className={styles.prices}>
                    <h6 className={styles.oldPrice}>
                      ${product.attributes.oldprice}
                    </h6>
                    <h6 className={styles.newPrice}>
                      ${product.attributes.newprice}
                    </h6>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Bestseller