import Link from "next/link";
import styles from "../intro.module.css";
import React from "react";

const Categories = (props) => {
  const data = props.categoryList;
  return (
    <div className={`nav nav-pills flex-column mb-3 mb-lg-0`}>
      {data.map((category) => (
        <Link
          key={category.id}
          //   href={`/category/${category.slug}`}
          href={`/${category.slug}`}
          className={` ${styles.linkItems} nav-link`}
          aria-current="false"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
