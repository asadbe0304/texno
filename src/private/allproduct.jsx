import React, { memo } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Form, Modal, Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import AllPostPagination from "./postPagination";
import { CartState } from "../context/Auth";
const allproduct = () => {
  const {
    state: { product, category },
    dispatch,
  } = CartState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  function loadUsers() {
    axios.get("http://localhost:3000/product").then((res) => {
      setData(res.data);
    });
  }
  useEffect(() => {
    loadUsers();
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/product/${id}`).then(loadUsers());
    setNewData(
      newData.filter((e) => {
        return e.id !== id;
      })
    );
  };
  console.log(newData);
  const [allcurrentPage, setAllCurrentPage] = useState(1);
  const [allpostsPerPage, setAllPostsPerPage] = useState(5);

  const allPostIndex = allcurrentPage * allpostsPerPage;
  const firstPostIndex = allPostIndex - allpostsPerPage;
  const allcurrentPosts = product.slice(firstPostIndex, allPostIndex);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Title</Form.Label>
              <Form.Control type="text" placeholder="Edit name" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Categories</Form.Label>
              <Form.Select className="text-capitalize">
                <option disabled>Categories select</option>
                {category.map((e) => {
                  return (
                    <option key={e} className="text-capitalize">
                      {e}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Product Price</Form.Label>
              <Form.Control type="number" placeholder="Edit Price" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="warning"
            // onClick={updateAPIData}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

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
            {data.length > 0
              ? data.map((e, i) => {
                  return (
                    <tr key={i} style={{ height: "40px", overflowY: "scroll" }}>
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
                      <td className="text-capitalize">{e.categories}</td>
                      <td className="overflow-hidden td-table w-25">
                        {e.description}
                      </td>
                      <td>{e.price} $</td>
                      <td className="p-0 text-center">
                        <button
                          onClick={() => deleteProduct(e.id)}
                          className="btn btn-danger admin-btn text-white mt-2 py-0 px-4"
                        >
                          Delete
                        </button>
                      </td>
                      <td className="p-0 text-center ">
                        <button
                          onClick={handleShow}
                          className="btn btn-success admin-btn text-white mt-2 py-0 px-4"
                        >
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
};

export default allproduct;
