"use client";
import React from "react";
import Link from "next/link";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  return (
    <div className={`${styles.loginForm} card shadow mx-auto`}>
      <div className={`card-body`}>
        <h4 className={`card-title text-center mb-4`}>Log In</h4>
        <form>
          <div className={`mb-3`}>
            <label className={`form-label`}>Email</label>
            <input type="email" className={`form-control`} />
          </div>
          <div className={`mb-3`}>
            <label className={`form-label`}>Password</label>
            <input type="password" className={`form-control`} />
          </div>
          <div className={`mb-4`}>
            <button type="submit" className={`btn btn-primary w-100`}>
              Log In
            </button>
          </div>
          <div className={`row gx-2`}>
            <div className={`col-6 mb-3`}>
              <button className={`btn btn-primary w-100`}>
                <i className={`bi bi-facebook me-2`}></i>Facebook
              </button>
            </div>
            <div className={`col-6 mb-3`}>
              <button className={`btn btn-primary w-100`}>
                <i className={`bi bi-google me-2`}></i>Google
              </button>
            </div>
          </div>
        </form>
        <p className={`text-center mb-2`}>
          You dont have any account ?
          <Link href="/register" className={`text-decoration-none ms-1`}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
