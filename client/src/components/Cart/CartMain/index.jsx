import React, { useState } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import ArrowRight from "../../../assets/Home-images/arrow-right.svg";
import DeleteIcon from "../../../assets/icons/delete-icon.svg";
import MinusIcon from "../../../assets/icons/minus-icon.svg";
import PlusIcon from "../../../assets/icons/plus-icon.svg";
import PromoCodeIcon from "../../../assets/icons/promo-code-icon.svg";
import ArrowDown from "../../../assets/icons/arrow-down-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  increaseItem,
  decreaseItem,
} from "../../../features/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import { privateInstance } from '../../../api/index'
const CartMain = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  console.log(products)
  const [promoCode, setPromoCode] = useState("")
  const [discountAmount, setDiscountAmount] = useState(0)
  const total = () => {
    let totalPrice = 0;
    products.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });
    return totalPrice;
  };
  const applyPromotion = (e) =>{
    e.preventDefault()
    const price = total()
    if(promoCode=="LOVELY20"){
      setDiscountAmount(total()/5)
    }
    else{
      setDiscountAmount(0)
    }
  }

  const handlePayment = async() => {
    const stripePromise = await loadStripe(
      "pk_test_51OJVenEkMjuw5rTSijXXhi4ekTDQw9NqShRi2vXL7220LybW3mRGwK86Le8A65pkBq3LsbYnZcffdAvLRISnH7aC007yKmv6Di"
    );
    try {
      const stripe = await stripePromise;
      const res = await privateInstance.post("/api/orders", { products });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className={styles["cart-main"]}>
      <div className={styles.container}>
        <div className={styles.transitions}>
          <Link to="/">Home</Link>
          <img src={ArrowRight} alt="" />
          <h6>Shop</h6>
        </div>
        <div className={styles["cart-details"]}>
          <h3 className={styles.title}>Your cart</h3>
          <div className={styles["cart-informations"]}>
            <div className={styles["cart-products"]}>
              {products.map((product) => {
                return (
                  <div className={styles.product} key={product.id}>
                    <Link
                      className={styles["product-wrapper"]}
                      to={`/product/${product.id}`}
                    >
                      <img
                        src={`${import.meta.env.VITE_UPLOAD_IMG}${product.img}`}
                        alt=""
                      />
                    </Link>
                    <div className={styles["product-details"]}>
                      <div className={styles.informations}>
                        <div className={styles["product-desc"]}>
                          <h5 className={styles["product-name"]}>
                            {product.name}
                          </h5>
                          <div>
                            <p className={styles.brand}>
                              Brand: <span>{product.brand}</span>
                            </p>
                            <p className={styles.category}>
                              Category: <span>{product.category}</span>
                            </p>
                          </div>
                        </div>
                        <p className={styles.price}>${product.price}</p>
                      </div>
                      <div className={styles.actions}>
                        <button
                          className={styles.delete}
                          onClick={() => dispatch(removeItem(product.id))}
                        >
                          <img src={DeleteIcon} alt="" />
                        </button>
                        <div className={styles["product-count"]}>
                          <button
                            className={styles.decrease}
                            onClick={() =>
                              dispatch(
                                decreaseItem({
                                  id: product.id,
                                  quantity: product.quantity,
                                })
                              )
                            }
                          >
                            <img src={MinusIcon} alt="" />
                          </button>
                          <span className={styles.count}>
                            {product.quantity}
                          </span>
                          <button
                            className={styles.increase}
                            onClick={() =>
                              dispatch(
                                increaseItem({
                                  id: product.id,
                                  quantity: product.quantity,
                                })
                              )
                            }
                          >
                            <img src={PlusIcon} alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles["order-summary"]}>
              <h4 className={styles.title}>Order Summary</h4>
              <div className={styles["amount-details"]}>
                <div className={styles.subtotal}>
                  <p>Subtotal</p>
                  <span>${total()}</span>
                </div>
                <div className={styles.discount}>
                  {discountAmount !== 0 ? (
                    <p>Discount(20%)</p>
                  ) : (
                    <p>Discount(0%)</p>
                  )}
                  <span>-${discountAmount}</span>
                </div>
                <div className={styles["delivery-fee"]}>
                  <p>Delivery Fee</p>
                  {products.length == 0 ? <span>$0</span> : <span>$15</span>}
                </div>
                <div className={styles.line}></div>
                <div className={styles.total}>
                  <p>Total</p>
                  {products.length !== 0 ? (
                    <span>${total() + 15 - discountAmount}</span>
                  ) : (
                    <span>$0</span>
                  )}
                </div>
              </div>
              <form className={styles["promo-code"]} onSubmit={applyPromotion}>
                <img src={PromoCodeIcon} alt="" />
                <input
                  type="text"
                  placeholder="Add promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button>Apply</button>
              </form>
              <button className={styles["checkout"]} onClick={() => {
                handlePayment()
                }}>
                <span>Go to Checkout</span>
                <img src={ArrowDown} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMain;
