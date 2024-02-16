import React from "react";
import Image from "next/image";

const FooterBrand = ({ src, paragraph }) => {
  return (
    <>
      <div className={`me-lg-4`}>
        <Image src={src} width={200} height={200} alt="logo" />
        <p className={`mt-3`}>{paragraph}</p>
      </div>
    </>
  );
};

export default FooterBrand;
