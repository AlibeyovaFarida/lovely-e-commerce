import React from "react";
import styles from "./style.module.scss";
import ArrowRight from "../../../assets/Home-images/arrow-right.svg";
import PrevBtn from "../../../assets/ProductDetails/prev.svg";
import NextBtn from "../../../assets/ProductDetails/next.svg";
import Cart from "../../../assets/ProductDetails/cart.svg";
import Eye from "../../../assets/ProductDetails/eye.svg";
import { useEffect, useState } from "react";
import { instance } from "../../../api";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { addToCart } from "../../../features/cartSlice";
import { updateFavorites } from "../../../api/updateFavorites";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductAbout = ({ id, quantity }) => {
  const [selectedProductDetails, setSelectedProductDetails] = useState([]);
  const [imagesCount, setImagesCount] = useState(0);
  const [selectImage, setSelectImage] = useState(0);
  const [isWish, setIsWish] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    const getProductDetails = async () => {
      const data = await instance.get(`/products/${id}?populate=*`);
      setSelectedProductDetails(data.data.data);
      setIsWish(data.data.data.attributes.isWish);
    };
    getProductDetails();
  }, [id]);
  console.log(isWish);
  useEffect(() => {
    setImagesCount(selectedProductDetails?.attributes?.images?.data?.length);
  }, [selectedProductDetails]);

  const handleFav = async (id, status) => {
    const data = await updateFavorites(id, status);
    setIsWish(!isWish)
  };
  
  return (
    <div className={styles["product-about"]}>
      <div className={styles.container}>
        <div className={styles.transitions}>
          <Link to="/">Home</Link>
          <img src={ArrowRight} alt="" />
          <h6>Shop</h6>
        </div>
        <div className={styles.product}>
          <div className={styles["product-images"]}>
            <div className={styles["main-image"]}>
              <button
                className={styles.prev}
                onClick={() => {
                  if (selectImage > 1) {
                    setSelectImage((i) => i - 1);
                  } else {
                    setSelectImage((i) => (i = imagesCount - 1));
                  }
                }}
              >
                <img src={PrevBtn} alt="" />
              </button>
              <img
                className={styles["img"]}
                src={`${import.meta.env.VITE_UPLOAD_IMG}${
                  selectedProductDetails?.attributes?.images?.data[
                    `${selectImage}`
                  ]?.attributes?.url
                }`}
                alt=""
              />
              <button
                className={styles.next}
                onClick={() => {
                  if (selectImage < imagesCount - 1) {
                    setSelectImage((i) => i + 1);
                  } else {
                    setSelectImage((i) => (i = 0));
                  }
                }}
              >
                <img src={NextBtn} alt="" />
              </button>
            </div>
            <div className={styles["other-images"]}>
              {selectedProductDetails?.attributes?.images?.data?.map(
                (img, index) => {
                  return (
                    <div
                      className={styles["image"]}
                      key={img.id}
                      onClick={() => setSelectImage(index)}
                    >
                      <img
                        src={`${import.meta.env.VITE_UPLOAD_IMG}${
                          selectedProductDetails?.attributes?.images?.data[
                            index
                          ]?.attributes?.url
                        }`}
                        alt=""
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className={styles["product-details"]}>
            <h2 className={styles["product-name"]}>
              {selectedProductDetails?.attributes?.title}
            </h2>
            <div className={styles.evaluation}>
              <Rating
                name="read-only"
                value={Number(selectedProductDetails?.attributes?.raiting)}
                precision={0.2}
                readOnly
              />
              <div className={styles.review}>10 reviews</div>
            </div>
            <h3 className={styles.price}>
              ${selectedProductDetails?.attributes?.newprice}
            </h3>
            <div className={styles.availability}>
              <h6>Availability :</h6>
              {selectedProductDetails?.attributes?.isAvailability ? (
                <h6 className={styles.isAvailability}>In Stock</h6>
              ) : (
                <h6 className={styles.isAvailability}>Out of Stock</h6>
              )}
            </div>
            <p className={styles["product-desc"]}>
              {selectedProductDetails?.attributes?.description}
            </p>
            <hr />
            <div className={styles.buttons}>
              <button className={styles.option}>Select Options</button>
              <button
                className={styles.wishlist}
                onClick={() => {
                  handleFav(
                    selectedProductDetails.id,
                    selectedProductDetails.attributes.isWish
                  );
                }}
              >
                {!isWish ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_3010_29890)">
                      <path
                        d="M8.4999 2.74805L7.7829 2.01105C6.0999 0.281049 3.0139 0.878049 1.89989 3.05305C1.37689 4.07605 1.25889 5.55305 2.21389 7.43805C3.13389 9.25305 5.0479 11.427 8.4999 13.795C11.9519 11.427 13.8649 9.25305 14.7859 7.43805C15.7409 5.55205 15.6239 4.07605 15.0999 3.05305C13.9859 0.878049 10.8999 0.280049 9.2169 2.01005L8.4999 2.74805ZM8.4999 15C-6.83311 4.86805 3.77889 -3.03995 8.32389 1.14305C8.38389 1.19805 8.44289 1.25505 8.4999 1.31405C8.55632 1.2551 8.61503 1.19839 8.67589 1.14405C13.2199 -3.04195 23.8329 4.86705 8.4999 15Z "
                        fill="#252B42"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3010_29890">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_3010_29890)">
                      <path
                        d="M8.4999 2.74805L7.7829 2.01105C6.0999 0.281049 3.0139 0.878049 1.89989 3.05305C1.37689 4.07605 1.25889 5.55305 2.21389 7.43805C3.13389 9.25305 5.0479 11.427 8.4999 13.795C11.9519 11.427 13.8649 9.25305 14.7859 7.43805C15.7409 5.55205 15.6239 4.07605 15.0999 3.05305C13.9859 0.878049 10.8999 0.280049 9.2169 2.01005L8.4999 2.74805ZM8.4999 15C-6.83311 4.86805 3.77889 -3.03995 8.32389 1.14305C8.38389 1.19805 8.44289 1.25505 8.4999 1.31405C8.55632 1.2551 8.61503 1.19839 8.67589 1.14405C13.2199 -3.04195 23.8329 4.86705 8.4999 15Z "
                        fill="red"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3010_29890">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </button>
              <button
                className={styles.cart}
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: selectedProductDetails.id,
                      name: selectedProductDetails.attributes.title,
                      brand:
                        selectedProductDetails.attributes.subcategories.data[0]
                          .attributes.title,
                      category:
                        selectedProductDetails.attributes.categories.data[0]
                          .attributes.title,
                      price: selectedProductDetails.attributes.newprice,
                      img: selectedProductDetails.attributes.images.data[0]
                        .attributes.url,
                      quantity: quantity,
                    })
                  );
                  toast.success(`🦄 ${selectedProductDetails.attributes.title} added!`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }}
              >
                <img src={Cart} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAbout;
