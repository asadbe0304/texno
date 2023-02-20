import React from "react";
import { Form } from "react-bootstrap";
import MultiRangeSlider from "multi-range-slider-react";
import { CartState } from "../../context/Auth";
import Rating from "./Rating";
const filter = () => {
  const {
    state: { byRating, product },
    dispatch,
  } = CartState();

  let priceArr = product.map((p) => p.price);
  console.log(priceArr);
  console.log(Math.max.apply(Math, priceArr));
  let maxprice = Math.max(...priceArr);
  let minprice = Math.min(...priceArr);

const updateFilter=()=>{
  
}
  return (
    <>
      <div className="filter-product border w-25 p-3">
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
        <Form.Label>Цена (₽)</Form.Label>
        <MultiRangeSlider
          label="false"
          ruler="false"
          max={maxprice}
          min={minprice}
          barLeftColor="#fff"
          barInnerColor="#444"
          thumbLeftColor="#ffc122"
          thumbRightColor="#ffc122"
          onChange={()=> updateFilter()}
          style={{ border: "none", boxShadow: "none", padding: "15px 10px" }}
        />
        <div className="d-flex justify-content-between w-100 align-items-start">
          <Form.Label htmlFor="inputPassword5">от</Form.Label>
          <Form.Control
          value={minprice}
            type="number"
            id="inputPassword5"
            className="border-warning w-50"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Label htmlFor="inputPassword6">до</Form.Label>
          <Form.Control
          value={maxprice}
            type="number"
            id="inputPassword6"
            className="border-warning w-50"
            aria-describedby="passwordHelpBlock"
          />
        </div>
        <label className="form-label d-flex flex-column align-items-start justify-content-start my-3"></label>
      </div>
    </>
  );
};

export default filter;
