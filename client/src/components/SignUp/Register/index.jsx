import React from "react";
import Facebook from "../../../assets/SignUp/facebook.svg";
import styles from "./style.module.scss";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from 'axios'
const initialUser = { username: "", email: "", password: "" };

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    onChange
  } = useForm();

  // console.log(errors);

  const [user, setUser] = useState(initialUser)
  const navigate = useNavigate()
  const handleUserChange = ({target}) => {
    const {name, value} = target;
    // const {name, value} = target;
    console.log(name, value);
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  }

  const signUp = async() => {
    try {
      const url = `${import.meta.env.VITE_BASE_URL}/api/auth/local/register`;
      if(user.username && user.email && user.password){
        const res = await axios.post(url,user)
        console.log(res)
        if(!!res){
          setUser(initialUser)
          navigate('/login')
        }
      }
    } catch (error) {
      console.log(error.message);
      navigate("/404");
    }
  }
  console.log(user);
  return (
    <div className={styles.register}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Sign up for free</h2>
          <p className={styles.desc}>
            Try everything free for 30 days, no payment details required
          </p>
        </div>
        <div className={styles.main}>
          <form onSubmit={handleSubmit(signUp)} noValidate>
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
              className={classNames(styles.name, {
                [styles.error]: errors.username,
              })}
            >
              <h6>Name *</h6>
              <input
                type="text"
                placeholder="Full Name *"
                name="username"
                value={user.username}
                {...register("username", {
                  required: { value: true, message: "This field is required" },
                  onChange: handleUserChange,
                  pattern: {
                    value:
                      /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/,
                    message: "Please enter the fullname correctly",
                  },
                })}
              />
              <p className={styles["error-message"]}>
                {errors.username?.message}
              </p>
            </div>
            <div
              className={classNames(styles.email, {
                [styles.error]: errors.email,
              })}
            >
              <h6>Email address *</h6>
              <input
                type="email"
                placeholder="example@gmail.com"
                name="email"
                value={user.email}
                onChange={handleUserChange}
                {...register("email", {
                  required: { value: true, message: "This field is required" },
                  onChange: handleUserChange,
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Please enter the email correctly",
                  },
                })}
              />
              <p className={styles["error-message"]}>{errors.email?.message}</p>
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
            <button type="submit" className={styles.submit}>
              Get Started
            </button>
            <p>
              By filling in the form above and clicking the “Get Started”
              button, you accept and agree to Terms of Service and Privacy
              Policy.
            </p>
            <div className={styles["redirection-login"]}>
              <h5>Already have an account?</h5>
              <Link to="/login">Sign in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
