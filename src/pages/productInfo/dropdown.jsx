import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const dropdown = () => {
  return (
    <>
      <Dropdown className="drop w-75">
        <Link to={"/"} className="underline-none text-secondary m-0 p-0">
          Home
        </Link>
        <MdArrowForwardIos className="text-warning mx-1" />
        <Link to={"/catproduct"} className="text-secondary underline-none p-0">
          Крупная бытовая техника
        </Link>
        <MdArrowForwardIos className="text-warning mx-1" />
        Холодильники
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
