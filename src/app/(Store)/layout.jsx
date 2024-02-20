import SearchForm from "@/components/SearchForm/SearchForm";
import Header from "@/layout/StoreUI/Header/Header";
import Footer from "@/layout/StoreUI/Footer/Footer";
import Navigation from "@/layout/StoreUI/Navigation/Navigation";
import React from "react";

const StoreLayout = ({
  children, // will be a page or nested layout
}) => {
  return (
    <>
      <Header />
      <SearchForm />
      {/* <Navigation /> */}
      {children}
      <Footer />
    </>
  );
};

export default StoreLayout;
