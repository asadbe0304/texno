import React from "react";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import { CartState } from "../../context/Auth";
const NavSearch = () => {
  const {
    state: { product, searchQuery, searchMobile },
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
      <div
        className={`search-mobile-bar justify-content-center bg-white align-items-center flex-row`}
      >
        <Form.Control
          placeholder="Search Products"
          value={searchQuery}
          className={`search-mobile `}
          onFocus={() => dispatch({ type: "SEARCHMOB", payload: true })}
          onChange={(e) => {
            dispatch({
              type: "FILTER_BY_SEARCH",
              payload: e.target.value,
            });
          }}
        />
      </div>
      <div className={`dropdown-search-mobile ${searchMobile ? "searchopen" : "searchclose"}`}>
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
                        dispatch({ type: "SEARCHMOB", payload: false })
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

export default NavSearch;
