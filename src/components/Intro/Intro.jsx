import React from "react";
import Categories from "./Categories/Categories";
import CustomCarousel from "./CustomCarousel/CustomCarousel";
import logo from "../../../public/main-phone.png";
import logo2 from "../../../public/main-tech.png";

const Intro = () => {
  const categoriesData = [
    { id: 1, name: "Electronics", slug: "#" },
    { id: 2, name: "Clothes and wear", slug: "#" },
    { id: 3, name: "Home interiors", slug: "#" },
    { id: 4, name: "Computer and tech", slug: "#" },
    { id: 5, name: "Tools, equipments", slug: "#" },
    { id: 6, name: "Sports and outdoor", slug: "#" },
    { id: 7, name: "Animal and pets", slug: "#" },
    { id: 8, name: "Machinery tools", slug: "#" },
    { id: 9, name: "Others products", slug: "#" },
  ];

  const imagesData = [
    {
      id: 1,
      url: logo,
      alt: "Image 1",
    },
    {
      id: 2,
      url: logo2,
      alt: "Image 2",
    },
  ];

  return (
    <section className={`mb-3 mt-3`}>
      <div className={`container`}>
        <div className={`card p-3`}>
          <div className={`row`}>
            <div className={`col-lg-3`}>
              <Categories categoryList={categoriesData} />
            </div>
            <div className={`col-lg-9`}>
              <CustomCarousel album={imagesData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
