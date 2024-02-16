import React from "react";
import styles from "./search.module.css";

const SearchForm = () => {
  return (
    <>
      <form
        className={`${styles.searchForm} mx-lg-5 my-lg-3 d-flex`}
        role="search"
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
