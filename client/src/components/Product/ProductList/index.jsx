import React from "react";
import FourSquaresIcon from "../../../assets/icons/four-squares.svg";
import PlanIcon from "../../../assets/icons/plan-icon.svg";
import ArrowBottom from "../../../assets/icons/arrow-bottom-icon.svg";
import styles from "./style.module.scss";
import Filter from "../../Product/Filter";
import search from "../../../assets/icons/search-icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  prevPage,
  nextPage,
  currentPage,
  selectSort,
  resetFiltration,
  searchData,
} from "../../../features/filterSlice";
import { useSearchParams } from "react-router-dom";
const ProductList = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const { pageNum, filteredProductsAccordingCategories, searchProduct } =
    useSelector((state) => state.filteredProducts.filteredProducts);
  const handleSearchChange = (e) => {
    dispatch(searchData(e.target.value));
  };
  return (
    <div className={styles["product-list"]}>
      <div className={styles.container}>
        <div className={styles["product-list-header"]}>
          <form className={styles.search} onKeyUp={() => {}}>
            <input
              type="text"
              value={searchProduct}
              onChange={(e) => handleSearchChange(e)}
              placeholder="Search"
            />
            <button>
              <img src={search} alt="" />
            </button>
          </form>
          <div className={styles["products-view"]}>
            <h6>Views:</h6>
            <button className={styles["four-squares-btn"]}>
              <img src={FourSquaresIcon} alt="" />
            </button>
            <button className={styles["plan-btn"]}>
              <img src={PlanIcon} alt="" />
            </button>
          </div>
          <div className={styles["filtration"]}>
            <button
              className={styles.dropdown}
              onClick={() => setShowPriceDropdown(!showPriceDropdown)}
            >
              <span>Price</span>
              <img src={ArrowBottom} alt="" />
            </button>
            {showPriceDropdown && (
              <div className={styles["price-sorting"]}>
                <p
                  onClick={() => {
                    dispatch(selectSort("asc"));
                    setShowPriceDropdown(false);
                  }}
                >
                  Lowest first
                </p>
                <div className={styles.line}></div>
                <p
                  onClick={() => {
                    dispatch(selectSort("desc"));
                    setShowPriceDropdown(false);
                  }}
                >
                  Highest first
                </p>
              </div>
            )}
            <button
              className={styles.filter}
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            >
              Filter
            </button>
            <button
              className={styles.reset}
              onClick={() => {
                dispatch(resetFiltration());
                searchParams.delete("category");
                setSearchParams(searchParams);
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <Filter showFilterDropdown={showFilterDropdown}/>
        <div className={styles.products}>
          {filteredProductsAccordingCategories.data?.map((product) => {
            return (
              <Link
                to={`/product/${product.id}`}
                className={styles.product}
                key={product.id}
              >
                <div className={styles["product-wrapper"]}>
                  <img
                    src={`${import.meta.env.VITE_UPLOAD_IMG}${
                      product.attributes.images.data[0].attributes.url
                    }`}
                    alt=""
                  />
                </div>
                <div className={styles["product-details"]}>
                  <h5 className={styles["product-title"]}>
                    {product?.attributes.title}
                  </h5>
                  <p className={styles["product-category"]}>
                    {
                      product?.attributes?.categories?.data[0]?.attributes
                        ?.title
                    }
                  </p>
                  <div className={styles.prices}>
                    <span className={styles.oldPrice}>
                      ${product?.attributes?.oldprice}
                    </span>
                    <span className={styles.newPrice}>
                      ${product?.attributes?.newprice}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className={styles.pagination}>
          <button
            className={styles["prev-btn"]}
            onClick={() => dispatch(prevPage())}
          >
            Prev
          </button>
          <ul className={styles.pages}>
            {new Array(
              filteredProductsAccordingCategories.meta?.pagination.pageCount
            )
              .fill("*")
              .map((_, index) => {
                return (
                  <li key={index + 1}>
                    <button
                      data-id={index + 1}
                      onClick={(e) =>
                        dispatch(currentPage(e.target.dataset.id))
                      }
                      className={pageNum == index + 1 ? `${styles.active}` : ""}
                    >
                      {index + 1}
                    </button>
                  </li>
                );
              })}
          </ul>
          <button
            className={styles["next-btn"]}
            onClick={() => dispatch(nextPage())}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
