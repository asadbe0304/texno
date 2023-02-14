import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { CartState } from "./../../context/Auth";
import "./style.scss";
const search = () => {
  const {
    state: { product, searchQuery, search },
    dispatch,
  } = CartState();

  let sortedProducts = product;
  if (searchQuery) {
    sortedProducts = sortedProducts.filter((e) =>
      e.title.toLowerCase().includes(searchQuery)
    );
  }
  return (
    <>
      <div className="header__search d-flex justify-content-center align-itmes-center">
        {/* search bar */}
        <InputGroup className="mb-0 search-bar">
          <Form.Control
            placeholder="Search Products"
            aria-label="Username"
            className="text-lowercase"
            value={searchQuery}
            onFocus={() => dispatch({ type: "SEARCH", payload: true })}
            onChange={(e) => {
              dispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
            aria-describedby="basic-addon1"
          />
          <InputGroup.Text
            id="basic-addon1"
            className="bg-warning border-0 rounded-0"
          >
            <BsSearch className="text-white fw-bold" />
          </InputGroup.Text>
        </InputGroup>
      </div>
      <div className={`dropdown-search py-2 ${search ? "d-flex" : "d-none"} `}>
        {sortedProducts.length > 0
          ? sortedProducts.slice(0, 3).map((e) => {
              return (
                <div
                  key={e.id}
                  className={`d-flex justify-content-between px-4 py-2 align-items-center  w-100 gap-3 my-0 border bg-white `}
                  style={{ width: "400px" }}
                >
                  <div className="d-flex justify-content-start gap-2 align-items-center">
                    <img
                      src={e.image}
                      alt="images"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <NavLink
                      to="/pro"
                      onClick={() =>
                        dispatch({ type: "SEARCH", payload: false })
                      }
                      className="underline-none text-black"
                    >
                      <div>{e.title}</div>
                    </NavLink>
                  </div>
                  <div>{e.price} $</div>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
};

export default search;
