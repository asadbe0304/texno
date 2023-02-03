import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import "./style.scss";
const index = () => {
  return (
    <>
      <div className="d-flex py-4 flex-column justify-content-center align-items-center">
        <div className="login-top d-flex flex-column aling-items-center w-50 justify-content-center">
          <h1 className="text-warning text-center">Log in </h1>
          <p className="text-center my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            necessitatibus suscipit molestiae architecto expedita omnis, in
            magnam iste rem, mollitia, nam non provident quisquam animi. Animi
            rerum similique ratione natus!
          </p>
        </div>
        <Form className="form-admin w-50">
          <Form.Group className="mb-3 w-100 fw-bold" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" required placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group
            className="mb-3 w-100 fw-bold"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3 w-100 " controlId="formBasicCheckbox">
            <Form.Check type="checkbox" required label="Check me out" />
          </Form.Group>
          <Button variant="warning" className="w-25 btn-submit" type="submit">
            Submit
          </Button>
          <NavLink to="/sign" className="sign-in btn btn-outline-warning mx-3">
            Sign In
          </NavLink>
        </Form>
      </div>
    </>
  );
};

export default index;
