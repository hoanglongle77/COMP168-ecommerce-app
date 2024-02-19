import React from "react";
import styles from "./newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={`py-5 bg-secondary`}>
      <div className={`container`}>
        <h4 className={`text-center`}>Subcribe on our newsletter</h4>
        <p className={`pb-2 text-center`}>
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <div className={`${styles.newsletterForm} mx-auto`}>
          <div className={`d-flex`}>
            <div className={`me-1 flex-grow-1`}>
              <input
                className={`w-100 form-control`}
                placeholder="Your Email"
                type="email"
              />
            </div>
            <div>
              <button type="submit" className={`btn btn-primary`}>
                Subcribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
