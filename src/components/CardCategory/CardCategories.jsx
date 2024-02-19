import Link from "next/link";
import React from "react";

const CardCategories = () => {
  const homeAndOutdoor = {
    heading: "Home and outdoor items",
    linkDescript: "Source now",
    url: "#",
  };

  const electronics = {
    heading: "Consumer electronics and gadgets",
    linkDescript: "Source now",
    url: "#",
  };

  //TO-DO: Get product base on category
  //......

  return (
    <>
      <CardCategory category={homeAndOutdoor} />
      <CardCategory category={electronics} />
    </>
  );
};

const CardCategory = (props) => {
  const { heading, linkDescript, url } = props.category;
  const productsData = []; //TO-DO: Get product base on category

  return (
    <section className={`pb-3`}>
      <div className={`container`}>
        <div className={`card overflow-hidden`}>
          <div className={`row gx-0`}>
            <div className={`col-lg-3 p-4 bg-cover`}>
              <h3 className={`mb-3`}>{heading}</h3>
              <Link href={`/`} className={`btn btn-primary`}>
                {linkDescript}
              </Link>
            </div>
            <div className={`col-lg-9 `}>
              <ul className={`row g-0 bordered-cols m-0`}>
                <li className={`col-6 col-lg-3 col-md-4`}>
                  <div className={`card-product p-3 pe-0`}>
                    {/* <Link/>
                    <Image/>
                    <p className={`text-muted small`}>{}</p> */}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardCategories;
