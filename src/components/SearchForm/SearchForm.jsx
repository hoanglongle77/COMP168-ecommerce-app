import React from "react";
import styles from "./search.module.css";

const SearchForm = () => {
  return (
    <section className={`py-3 bg-white border-bottom`}>
      <div className={`container`}>
        <form action="#">
          <div className={`input-group`}>
            <input
              type="search"
              className={`${styles.searchInput} form-control`}
              placeholder="Search"
            />
            <select className={`${styles.searchSelect} form-select`}>
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home</option>
              <option>Beauty</option>
              <option>Toys</option>
              <option>Games</option>
              <option>Books</option>
              <option>Music</option>
              <option>Movies</option>
              <option>Sports</option>
              <option>Health</option>
              <option>Garden</option>
              <option>Tools</option>
              <option>Kids</option>
              <option>Beauty</option>
              <option>Toys</option>
              <option>Games</option>
              <option>Books</option>
              <option>Music</option>
              <option>Movies</option>
              <option>Sports</option>
              <option>Health</option>
              <option>Garden</option>
              <option>Tools</option>
              <option>Kids</option>
            </select>
            <button className={`btn btn-primary`}>
              <i class="bi bi-search pe-1"></i>Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
