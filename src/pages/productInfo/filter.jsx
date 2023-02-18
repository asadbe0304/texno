import React from "react";
import { Form } from "react-bootstrap";
import MultiRangeSlider from "multi-range-slider-react";
const filter = () => {
  return (
    <>
      <div className="filter-product border w-25 p-3">
        <h6 className="fw-bold text-black">Сначала популярные</h6>
        <div className="form-check">
          <label className="form-check-labe " htmlFor="filter">
            <input
              className="form-check-input bg-warning"
              type="checkbox"
              id="filter"
            />
            5 и выше
            <span className="text-secondary mx-2">121</span>
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="filter2">
            <input
              className="form-check-input bg-warning"
              type="checkbox"
              id="filter2"
            />
            4 и выше <span className="text-secondary mx-2">13</span>
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="filter3">
            <input
              className="form-check-input bg-warning"
              type="checkbox"
              id="filter3"
            />
            3 и выше
            <span className="text-secondary mx-2">13</span>
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="filter4">
            <input
              className="form-check-input bg-warning"
              type="checkbox"
              id="filter4"
            />
            2 и выше
            <span className="text-secondary mx-2">13</span>
          </label>
        </div>
        <Form.Label>Цена (₽)</Form.Label>
        <MultiRangeSlider
          min={0}
          max={100}
          step={5}
          label="false"
          ruler="false"
          barLeftColor="#fff"
          barInnerColor="red"
          thumbLeftColor="yellow"
          thumbRightColor="yellow"
          style={{border: 'none', boxShadow: 'none', padding: '15px 10px' }}
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
      </div>
    </>
  );
};

export default filter;
