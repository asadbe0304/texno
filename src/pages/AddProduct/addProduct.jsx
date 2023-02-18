import React from "react";
import "./style.scss";
import Form from "./form"
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
        <Form/>
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
