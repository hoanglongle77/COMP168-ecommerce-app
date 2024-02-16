import React from "react";
import styles from "./inquiry.module.css";

const Inquiry = () => {
  return (
    <div
      className={`${styles.inquiryContainer} container-fluid my-4 pb-4 d-flex flex-lg-row flex-md-row flex-column justify-content-between`}
    >
      <div className={`${styles.inquiryTitleContainer}`}>
        <h1 className={`text-light`}>Inquiry</h1>
        <p className={`text-light`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          quod.
        </p>
      </div>
      <div className={`${styles.inquiryFormContainer}`}>
        <form
          className={`${styles.inquiryForm} d-flex flex-column align-items-start my-3 mx-3`}
        >
          <p>Send quote to supplier</p>
          <input className={styles.inputName} type="text" placeholder="Name" />
          <input
            className={styles.inputEmail}
            type="text"
            placeholder="Email"
          />
          <input
            className={styles.inputPhone}
            type="text"
            placeholder="Phone"
          />
          <textarea placeholder="Message" className={styles.inputMessage} />
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Inquiry;
