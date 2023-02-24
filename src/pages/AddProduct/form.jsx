import React from "react";
import Img from "./../../assets/images/22.webp";
import { ToastContainer, toast } from "react-toastify";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import uuid from "react-uuid";

import "react-toastify/dist/ReactToastify.css";

const form = ({ prop }) => {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const data = {
    title: title,
    price: price,
    description: description,
    categories: categories,
    image: "https://i.pravatar.cc",
  };
  function addProduct(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/product", data)
      .then((res) => toast.success("add porduct"), window.location.reload)
      setTitle("")
      setPrice("")
      setCategories("")
      setDescription("")
  }

 

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <form className="form d-flex justify-content-between align-items-start flex-wrap">
        <label htmlFor="add-product" className="w-75 fw-bold">
          Product Title
          <input
            id="add-product"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Title product"
            className="form-control border-warning my-3 text-secondary w-100"
          />
        </label>
        <Form.Select
          onChange={(e) => setCategories(e.target.value)}
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
          <button
            className="btn btn-warning"
            type="button"
            onClick={addProduct}
          >
            Add Product
          </button>
        </div>
      </form>
    </>
  );
};

export default form;
