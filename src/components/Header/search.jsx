import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link, NavLink, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { CartState } from "./../../context/Auth";
import Load from "./../Spin/MyLoader"
import "./style.scss";
const search = () => {
  const {
    state: { product, searchQuery },
    dispatch,
  } = CartState();
  let sortedProducts = product;
  if (searchQuery) {
    sortedProducts = sortedProducts.filter((e) =>
      e.title.toLowerCase().includes(searchQuery)
    );
  }
  // console.log(searchQuery);
  // console.log(sortedProducts);
  // const handlePush = () => {
  //   arr.push(sortedProducts);
  //   console.log(arr);
  // };
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
            // onClick={handlePush()}
            className="bg-warning header_search-btn border-0 rounded-0"
          >
            <BsSearch className="text-white fw-bold" />
          </InputGroup.Text>
        </InputGroup>
      </div>
      <div
        className={`dropdown-search py-3 ${
          searchQuery.length == 0 ? "d-none" : "d-flex"
        } `}
      >
        {sortedProducts.length > 0 ? (
          sortedProducts.slice(0, 8).map((e) => {
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
                  <Link
                    to={`/product/${e.id}`}
                    onClick={() => dispatch({ type: "SEARCH", payload: false })}
                    className="underline-none text-black"
                  >
                    <div>{e.title}</div>
                  </Link>
                </div>
                <div>{e.price} $</div>
              </div>
            );
          })
        ) : (
          <Load />
        )}
      </div>
    </>
  );
};

export default search;
