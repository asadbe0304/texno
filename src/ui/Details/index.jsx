import React from "react";
import "./style.scss";
import Product from "./../../pages/product/index";
const index = () => {
  return (
    <>
      <div className="details">
        <div className="details-card">
          <Product />
        </div>
      </div>
    </>
  );
};

export default index;
