import HeaderAuth from "@/layout/AuthUI/HeaderAuth/HeaderAuth";
import Footer from "@/layout/StoreUI/Footer/Footer";
import React from "react";
import styles from "./authLayout.module.css";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <HeaderAuth />
      <div className={`${styles.mainContainer} py-5`}>{children}</div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
