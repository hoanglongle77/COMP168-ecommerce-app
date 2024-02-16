"use client";
import React from "react";
import Link from "next/link";
import styles from "./header.module.css";
import SearchForm from "@/components/SearchForm/SearchForm";

const Navigation = () => {
  return (
    <>
      <nav className={`${styles.navBar} navbar navbar-expand-lg bg-light`}>
        <div className={`${styles.menuContainer} container-fluid`}>
          <a
            className={`${styles.shopBrand} my-lg-3 ms-lg-5 navbar-brand fw-bold`}
            href="#"
          >
            My Store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={` collapse navbar-collapse justify-content-around`}
            id="navbarSupportedContent"
          >
            <SearchForm />
            <ul className={`navbar-nav ${styles.mobileMenu}`}>
              <li className={`${styles.menuItem} nav-item`}>
                <Link className={`${styles.headerLink} nav-link`} href="#">
                  <i className={`${styles.profile} bi bi-person-circle`}></i>
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`${styles.headerLink} nav-link`} href="#">
                  <i className={`${styles.message} bi bi-chat-dots-fill`}></i>
                  Message
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`${styles.headerLink} nav-link`} href="#">
                  <i className={`${styles.orders} bi bi-box2-heart-fill`}></i>
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`${styles.headerLink} nav-link`} href="#">
                  <i className={`${styles.myCart} bi bi-bag-check-fill`}></i>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
