import React, { memo } from "react";
import { useState } from "react";
import { Form, Table } from "react-bootstrap";
import AllPostPagination from "./postPagination";
import { CartState } from "../context/Auth";
const allproduct = memo(() => {
  const {
    state: { product },
    dispatch,
  } = CartState();

  const [allcurrentPage, setAllCurrentPage] = useState(1);
  const [allpostsPerPage, setAllPostsPerPage] = useState(5);

  const allPostIndex = allcurrentPage * allpostsPerPage;
  const firstPostIndex = allPostIndex - allpostsPerPage;
  const allcurrentPosts = product.slice(firstPostIndex, allPostIndex);
  return (
    <>
      <div className="product-table bg-white  my-3 mx-auto">
        <h5>All Product</h5>
        <hr />
        <Table
          bordered
          hover
          striped
          variant={"dark"}
          className="table  w-100 m-0 "
        >
          <thead>
            <tr>
              <th>id</th>
              <th>Images</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Сумма</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {allcurrentPosts.length > 0
              ? allcurrentPosts.map((e) => {
                  return (
                    <tr
                      key={e.id}
                      style={{ height: "40px", overflowY: "scroll" }}
                    >
                      <td>{e.id}</td>
                      <td>
                        <img
                          src={e.image}
                          className="rounded-5"
                          width={50}
                          height={50}
                          alt="images"
                        />
                      </td>
                      <td>{e.title}</td>
                      <td className="text-capitalize">{e.category}</td>
                      <td className="overflow-hidden td-table w-25">
                        {e.description}
                      </td>
                      <td>{e.price} $</td>
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
                  );
                })
              : "Not product"}
          </tbody>
        </Table>
        <div className="py-3 d-flex justify-content-center align-items-center">
          <AllPostPagination
            totalPosts={product.length}
            allpostsPerPage={allpostsPerPage}
            setAllCurrentPage={setAllCurrentPage}
            allcurrentPage={allcurrentPage}
          />
        </div>
      </div>
    </>
  );
});

export default allproduct;
