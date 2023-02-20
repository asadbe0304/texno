import React from "react";
import { Form } from "react-bootstrap";
import MultiRangeSlider from "multi-range-slider-react";
import { CartState } from "../../context/Auth";
import Rating from "./Rating";
const filter = () => {
  const {
    state: { byRating },
    dispatch,
  } = CartState();
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
          min={0}
          max={100}
          step={5}
          label="false"
          ruler="false"
          barLeftColor="#fff"
          barInnerColor="#444"
          thumbLeftColor="#ffc122"
          thumbRightColor="#ffc122"
          style={{ border: "none", boxShadow: "none", padding: "15px 10px" }}
        />
        <div className="d-flex justify-content-between w-100 align-items-start">
          <Form.Label htmlFor="inputPassword5">Ot</Form.Label>
          <Form.Control
            type="number"
            id="inputPassword5"
            className="border-warning w-50"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Label htmlFor="inputPassword6">do</Form.Label>
          <Form.Control
            type="number"
            id="inputPassword6"
            className="border-warning w-50"
            aria-describedby="passwordHelpBlock"
          />
        </div>
        <label className="form-label d-flex flex-column align-items-start justify-content-start my-3">
        </label>
      </div>
    </>
  );
};

export default filter;
