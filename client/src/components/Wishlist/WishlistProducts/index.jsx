import React, { useEffect } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import ArrowRight from "../../../assets/Home-images/arrow-right.svg";
import { useDispatch, useSelector } from "react-redux";
import { getWishProducts } from "../../../features/wishlistSlice";
const WishlistProducts = () => {
  const {wishProducts} = useSelector(state => state.wishlist)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getWishProducts());
  }, [dispatch]);
  
  return (
    <div className={styles["wishlist-main"]}>
      <div className={styles.container}>
        <div className={styles.transitions}>
          <Link to="/">Home</Link>
          <img src={ArrowRight} alt="" />
          <h6>Shop</h6>
        </div>
        <div className={styles["wishlist-products"]}>
          <h3 className={styles.title}>Your wishlist</h3>
          <div className={styles.products}>
            {wishProducts.map((product) => {
              return (
                <Link
                  className={styles.product}
                  key={product.id}
                  to={`/product/${product.id}`}
                >
                  <div className={styles["product-wrapper"]}>
                    <img
                      src={`${import.meta.env.VITE_UPLOAD_IMG}${product.attributes.images.data[0].attributes.url}`}
                      alt=""
                    />
                  </div>
                  <div className={styles["product-details"]}>
                    <h5 className={styles["product-name"]}>{product.attributes.title}</h5>
                    <p className={styles["product-category"]}>
                      {product.attributes.categories.data[0].attributes.title}
                    </p>
                    <div className={styles.prices}>
                      <h6 className={styles["old-price"]}>
                        ${product.attributes.oldprice}
                      </h6>
                      <h6 className={styles["new-price"]}>
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
    </div>
  );
};

export default WishlistProducts;
