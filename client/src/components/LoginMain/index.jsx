import React from "react";
import Facebook from "../../assets/SignUp/facebook.svg";
import styles from "./style.module.scss";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import {storeUser, userData} from '../../services/helpers'
const initialUser = {password: "", identifier: ""}
const LoginMain = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(errors);

  const [user, setUser] = useState(initialUser)
  const navigate = useNavigate()

  const handleUserChange = ({target}) =>{
    const {name, value} = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]:value,
    }))
  }

  const handleLogin = async() => {
    const url = `${import.meta.env.VITE_BASE_URL}/api/auth/local`;
    try {
      if(user.password && user.identifier){
        const {data} = await axios.post(url,user)
        if(data.jwt){
          storeUser(data)
          setUser(initialUser)
          navigate("/")
        }
      }
    } catch (error) {
      alert("You are not registered!");
      navigate('/signup')
    }
  }
  console.log(user);
  return (
    <div className={styles["login-main"]}>
      <div className={styles.container}>
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit(handleLogin)} noValidate>
          <button className={styles.facebook} disabled>
            <img src={Facebook} alt="" />
            <span>Facebook</span>
          </button>
          <div className={styles.seperator}>
            <div className={styles.line}></div>
            <span>OR</span>
            <div className={styles.line}></div>
          </div>
          <div
            className={classNames(styles.email, {
              [styles.error]: errors.identifier,
            })}
          >
            <h6>Email address *</h6>
            <input
              type="email"
              placeholder="example@gmail.com"
              name="identifier"
              value={user.identifier}
              formNoValidate
              {...register("identifier", {
                required: { value: true, message: "This field is required" },
                onChange: handleUserChange,
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Please enter the email correctly",
                },
              })}
            />
            <p className={styles["error-message"]}>{errors.identifier?.message}</p>
          </div>
          <div
            className={classNames(styles.password, {
              [styles.error]: errors.password,
            })}
          >
            <h6>Password *</h6>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              {...register("password", {
                required: { value: true, message: "This field is required" },
                onChange: handleUserChange,
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                  message: "Please enter the password correctly",
                },
              })}
            />
            <p className={styles["error-message"]}>
              {errors.password?.message}
            </p>
          </div>
          <button className={styles.submit} type="submit">
            Get Started
          </button>
          <div className={styles["redirection-signup"]}>
            <h5>Already have an account?</h5>
            <Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginMain;
