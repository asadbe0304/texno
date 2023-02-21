import React from "react";
import { Form } from "react-bootstrap";
import MultiRangeSlider from "multi-range-slider-react";
import { useState } from "react";
import { CartState } from "../../context/Auth";
import Rating from "./Rating";
const filter = () => {
  const {
    state: { byRating, product, byPrice, clear},
    dispatch,
  } = CartState();

  let priceArr = product.map((p) => p.price);
  let maxprice = Math.max(...priceArr);
  let minprice = Math.min(...priceArr);

  // const [price, setPrice] = useState(0);
  return (
    <>
      <div className="filter-product border w-25 p-3">
        <hr />
        <h6 className="fw-bold text-black">Сначала популярные</h6>
        <Rating
          rating={byRating}
          onClick={(i) =>
            dispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
        <hr />
        <Form.Label className="mt-3 d-flex flex-column">Цена (₽)</Form.Label>
        <input
          type={"range"}
          name={"price"}
          min={minprice}
          max={maxprice}
          value={byPrice}
          onChange={(e) =>
            dispatch({ type: "SORT_BY_PRICE", payload: e.target.value })
          }
          style={{ border: "none", boxShadow: "none", padding: "15px 10px" }}
        />
        <div className="d-flex justify-content-between w-100 align-items-start">
          <h3 className="filter-price-title">{Math.ceil(byPrice)} $ и выше</h3>
        </div>
      <hr />
        <div className="w-100 my-2">
        <button className="btn w-100 btn-outline-dark" onClick={()=> dispatch({type: "CLEAR", payload: true})}>Clear</button>
        </div>
        <label className="form-label d-flex flex-column align-items-start justify-content-start my-3"></label>
      </div>
    </>
  );
};

export default filter;
