import Image from "next/image";
import React from "react";
import styles from "../intro.module.css";

const CustomCarousel = (props) => {
  const data = props.album;
  return (
    <div className={`col-xxl-12 col-lg-12`}>
      <div
        id="carouselExampleControls"
        className={`carousel slide`}
        data-bs-ride="carousel"
      >
        <div className={`carousel-inner`}>
          {data.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
        <button
          className={`carousel-control-prev`}
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className={`carousel-control-prev-icon`}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className={`carousel-control-next`}
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className={`carousel-control-next-icon`}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

const ImageCard = (props) => {
  const { url, alt } = props.image;
  return (
    <>
      <div className="carousel-item active">
        <div className={`carousel-caption`}>
          <h5>Hello</h5>
        </div>

        <Image
          className={`${styles.image} rounded d-block`}
          width="auto"
          height="auto"
          alt={alt}
          src={url}
        />
      </div>
    </>
  );
};

export default CustomCarousel;
