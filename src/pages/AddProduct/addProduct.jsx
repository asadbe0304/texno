import React from "react";
import "./style.scss";
import { CartState } from "../../context/Auth";
import Form from "./form";
import AllProduct from "./../../private/allproduct";
const addProduct = () => {
  const {
    state: { category, product },
    dispatch,
  } = CartState();
  return (
    <>
      <div className="add-product w-100">
        <div className="add-product-title">
          <h3 className="add-new-product-title order-top-title">
            Add New Product
          </h3>
        </div>
        <hr />
        <div className="add-product-form  w-100">
          <Form prop={category} />
          <AllProduct />
        </div>
      </div>
    </>
  );
};

export default addProduct;
