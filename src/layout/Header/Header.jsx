import React from "react";
import Link from "next/link";
import SearchForm from "@/components/SearchForm/SearchForm";
import styles from "./header.module.css";

const Navigation = () => {
  return (
    <>
      <section className={`header-main border-bottom py-3`}>
        <div className={`container`}>
          <div className={`row gx-2 gy-3`}>
            <div className={`col-lg col-md col-6 flex-grow-0`}>
              <Link href="#">My Shop</Link>
            </div>
            <div className={`col-lg col-md col-6 flex-grow-0`}>
              <div className={`dropdown float-end`}></div>
            </div>
            <div className={`col-lg col-md order-lg-last`}>
              <div className={`float-md-end`}>
                <Link href="/login" className={`btn btn-light me-2`}>
                  <i
                    className={`${styles.loginIcon} bi bi-person-circle me-2`}
                  ></i>
                  Sign In
                </Link>
                <Link href="#" className={`btn btn-light me-2`}>
                  <i
                    className={`${styles.wishListIcon} bi bi-bag-heart-fill`}
                  ></i>{" "}
                  Wish List
                </Link>
                <Link href="#" className={`btn btn-light me-2`}>
                  <i
                    className={`${styles.myCartIcon} bi bi-bag-check-fill me-2`}
                  ></i>
                  My Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navigation;
