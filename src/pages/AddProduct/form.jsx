import React from "react";
import Img from "./../../assets/images/22.webp";
import { Form } from "react-bootstrap";

const form = ({ prop }) => {
  return (
    <>
      <form className="form d-flex justify-content-between align-items-start flex-wrap">
        <label htmlFor="add-product" className="w-75 fw-bold">
          Product Title
          <input
            id="add-product"
            type="text"
            required
            placeholder="Title product"
            className="form-control border-warning my-3 text-secondary w-100"
          />
        </label>
        <Form.Select
          className="d-flex my-1 flex-column border-warning text-capitalize fw-bold w-75"
          aria-label="Default select example"
        >
          {prop.length > 0
            ? prop.map((e) => {
                return (
                  <option className="text-capitalize" key={e} defaultValue={e}>
                    {e}
                  </option>
                );
              })
            : "not category"}
          {/* <option value="Laptop">Laptop</option>
            <option value="desktop">Desktop</option> */}
        </Form.Select>
        <label htmlFor="add-product-price" className="w-75 fw-bold">
          Product price
          <input
            required
            id="add-product-price"
            type="number"
            placeholder="Product price"
            className="form-control border-warning my-3 text-secondary w-100"
          />
        </label>
        <label htmlFor="add-product-desc" className="w-75 text-desc fw-bold">
          Product description
          <textarea
            name="add-product-desc"
            id="add-product-desc"
            className="form-control border-warning border-2 text-area my-3 w-100"
            rows={6}
            required
          ></textarea>
        </label>
        <label
          htmlFor="img"
          className="d-flex justify-content-between align-items-start flex-column fw-bold"
        >
          Prodcut Img
          <img src={Img} alt="new product" className="new-product-img my-4" />
          <input type="file" id="img" className="form-control" />
        </label>
        <div className="w-100 my-3">
          <button className="btn btn-warning">Add Product</button>
        </div>
      </form>
    </>
  );
};

export default form;
