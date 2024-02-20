import Link from "next/link";
import React from "react";

const HeaderAuth = () => {
  return (
    <div className={`bg-white border-bottom py-lg-3 py-2`}>
      <div className={`container`}>
        <div className={`row gy-3 align-items-center`}>
          <div className={`col-4`}>
            <Link href="/">My Shop</Link>
          </div>
          <div className={`col-8`}>
            <div className={`float-end`}>
              <Link href="/login" className={`btn btn-light`}>
                Login
              </Link>
              <Link href="/register" className={`btn btn-light`}>
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAuth;
