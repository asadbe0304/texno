import React from "react";
import "./style.scss";
import Img from "./../../assets/images/22.webp";
const addProduct = () => {
  return (
    <>
      <div className="add-product w-100">
        <div className="add-product-title">
          <h3 className="add-new-product-title order-top-title">
            Add New Product
          </h3>
        </div>
        <hr />
        <div className="add-product-form w-100">
          <form className="form d-flex justify-content-between align-items-start flex-wrap">
            <label htmlFor="add-product" className="w-75">
              Product Title
              <input
                id="add-product"
                type="text"
                required
                placeholder="Title product"
                className="form-control my-3 text-secondary w-100"
              />
            </label>
            <label htmlFor="select" className="d-flex my-1 flex-column w-75">
              Select Categories
              <select
                required
                name="variant"
                id="select"
                className="w-100 form-control my-2"
              >
                <option value="Laptop">Laptop</option>
                <option value="desktop">Desktop</option>
              </select>
            </label>
            <label htmlFor="add-product-price" className="w-75">
              Product price
              <input
                required
                id="add-product-price"
                type="number"
                placeholder="Product price"
                className="form-control my-3 text-secondary w-100"
              />
            </label>
            <label htmlFor="add-product-desc" className="w-75 text-desc">
              Product description
              <textarea
                name="add-product-desc"
                id="add-product-desc"
                className="form-control text-area my-3 w-100"
                rows={6}
                required
              ></textarea>
            </label>
            <label
              htmlFor="img"
              className="d-flex justify-content-between align-items-start flex-column"
            >
              Prodcut Img
              <img
                src={Img}
                alt="new product"
                className="new-product-img my-4"
              />
              <input type="file" id="img" className="form-control" />
            </label>
            <div className="w-100 my-3">
              <button className="btn btn-warning">Add Product</button>
            </div>
          </form>
        </div>
        <div className="product-table  my-3 mx-auto">
          <h5>All Product</h5>
          <hr />
          <table className="table table-bordered table-responsive table-hover table-striped table-dark m-0 ">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Category</th>
                <th>Description</th>
                <th>Сумма</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Ultra Sand disk 22</td>
                <td>Desktop</td>
                <td className="w-25">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
                  fuga porro vitae.
                </td>
                <td>49 000 сум</td>
                <td className="p-0 text-center">
                  <button className="btn btn-danger admin-btn text-white mt-2 py-0 px-4">
                    Delete
                  </button>
                </td>
                <td className="p-0 text-center ">
                  <button className="btn btn-success admin-btn text-white mt-2 py-0 px-4">
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default addProduct;
