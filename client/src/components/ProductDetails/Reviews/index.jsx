import React from "react";
import styles from "./style.module.scss";
import Rating from "@mui/material/Rating";
import { addReview, deleteReviews, getReviews } from "../../../features/reviewSlice";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Delete from '../../../assets/icons/delete-icon.svg'
import { userData } from "../../../services/helpers";
import {privateInstance} from '../../../api/index'
import { useForm } from "react-hook-form";
import classNames from "classnames";
const Reviews = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);
  const reviewsAttributes = reviews?.data;
  const [stars, setStars] = useState(0)
  const [text, setText] = useState("")
  const {user} = userData()
  const {jwt} = userData()
  useEffect(() => {
      dispatch(getReviews(id));
    }, [dispatch, id]);
  const handleFormSubmit = () => {
    const data = {
        stars,
        productID: id,
        text,
        username: user.username,
        email: user.email
    }

    newReview(data)
    setText("")
    setStars(0)
  }
  const newReview = async(data) => {
    try {
        const res = await privateInstance.post("/api/reviews/",{
            data
        })
        dispatch(addReview(res.data.data))
    } catch (error) {
        console.log(error)
    }
  }
  const handleDelete = async(id) => {
    try {
        await privateInstance.delete(`/api/reviews/${id}`)
        dispatch(deleteReviews(id))
    } catch (error) {
        console.log(error);
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    onChange
  } = useForm();
  return (
    <div className={styles.reviews}>
      <div className={styles.container}>
        <div className={styles["review-list"]}>
          <h3>Reviews :</h3>
          <div className={styles.list}>
            {reviewsAttributes?.map((item) => {
              return (
                <div key={item.id} className={styles.review}>
                  <div className={styles.top}>
                    <div>
                      <Rating
                        name="half-rating"
                        precision={0.5}
                        value={item.attributes.stars}
                        disabled
                      />
                      <p className={styles["review-text"]}>
                        {item.attributes.text}
                      </p>
                    </div>
                    {item.attributes.username === user?.username && (
                      <button onClick={() => handleDelete(item.id)}>
                        <img src={Delete} alt="" />
                      </button>
                    )}
                  </div>
                  <div className={styles.bottom}>
                    <p className={styles.username}>
                      Writer: <span>{item.attributes.username}</span>
                    </p>
                    <p className={styles.email}>
                      Email: <span>{item.attributes.email}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {jwt && (
          <div className={styles["write-review"]}>
            <h3>Be the first to review “Product Name”</h3>
            <form
              className={styles["add-review"]}
              onSubmit={handleSubmit(handleFormSubmit)}
            >
              <div className={styles.rating}>
                <label htmlFor="">Your Rating</label>
                <Rating
                  name="half-rating"
                  precision={0.5}
                  value={stars}
                  onChange={(event, newValue) => {
                    setStars(newValue);
                  }}
                />
              </div>
              <div
                className={classNames(styles["review-desc"], {
                  [styles.error]: errors.review,
                })}
              >
                <label htmlFor="">Your Review *</label>
                <textarea
                  rows="5"
                  cols="50"
                  placeholder="Message"
                  value={text}
                  // onChange={(e) => setText(e.target.value)}
                  {...register("review", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    onChange: (e) => setText(e.target.value),
                  })}
                />
                <p className={styles["error-message"]}>
                  {errors.review?.message}
                </p>
              </div>
              <div className={styles["personal-information"]}>
                <div className={styles.name}>
                  <label htmlFor="">Name *</label>
                  <input
                    type="text"
                    placeholder="Name *"
                    value={user.username}
                  />
                </div>
                <div className={styles.email}>
                  <label htmlFor="">Email *</label>
                  <input
                    type="email"
                    placeholder="Email *"
                    value={user.email}
                  />
                  <span>We'll never share your email with anyone else.</span>
                </div>
              </div>
              <button className={styles.submit} type="submit">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
