import Footer from "@/layout/Footer/Footer";
import Header from "@/layout/Header/Header";
import Navigation from "@/layout/Navigation/Navigation";
import React from "react";

const StoreLayout = ({
  children, // will be a page or nested layout
}) => {
  return (
    <>
      <Header />
      {/* <Navigation /> */}
      {children}
      <Footer />
    </>
  );
};

export default StoreLayout;
