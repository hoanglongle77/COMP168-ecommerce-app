"use client";
import React from "react";
import Link from "next/link";
import styles from "./registerForm.module.css";

const RegisterForm = () => {
  return (
    <div className={`${styles.registerForm} card shadow mx-auto`}>
      <div className={`card-body`}>
        <h4 className={`card-title text-center mb-4`}>Register</h4>
        <form>
          <div className={`row gx-2`}>
            <div className={`col-6 mb-3`}>
              <label className={`form-label`}>First name</label>
              <input
                type={`text`}
                className={`form-control`}
                placeholder={`First name`}
              />
            </div>
            <div className={`col-6 mb-3`}>
              <label className={`form-label`}>Last name</label>
              <input
                type={`text`}
                className={`form-control`}
                placeholder={`Last name`}
              />
            </div>
          </div>
          <div className={`mb-3`}>
            <label className={`form-label`}>Email</label>
            <input type="email" className={`form-control`} />
          </div>
          <div className={`mb-3`}>
            <label className={`form-label`}>Create password</label>
            <input type="password" className={`form-control`} />
          </div>
          <div className={`mb-3`}>
            <label className={`form-label`}>Repeat password</label>
            <input type="password" className={`form-control`} />
          </div>
          <div className={`mb-4`}>
            <label className={`form-check`}>
              <input type="checkbox" className={`form-check-input`} />
              <span className={`form-check-label`}>
                I agree to the terms and conditions
              </span>
            </label>
          </div>
          <div className={`mb-4`}>
            <button type="submit" className={`btn btn-primary w-100`}>
              Register
            </button>
          </div>
        </form>
        <p className={`text-center mb-2`}>
          Already have account ?{" "}
          <Link href="#" className={`text-decoration-none ms-1`}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
