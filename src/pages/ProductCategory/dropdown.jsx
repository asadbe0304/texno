import React from "react";
import { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
const dropdown = () => {
  return (
    <>
      <Dropdown className="drop">
        <Link to="/" className="underline-none p-0 text-secondary m-0 p-0">
          Home
        </Link>
        <MdArrowForwardIos className="text-warning mx-1" />
        Крупная бытовая техника
        <Dropdown.Toggle
          variant="white"
          id="dropdown-basic"
          className="text-warning mx-2 toogle"
        ></Dropdown.Toggle>
        <Dropdown.Menu className="drop-menu">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default dropdown;
