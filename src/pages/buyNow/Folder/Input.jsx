import React from "react";

const Input = () => {
  return (
    <>
      <div className="p-3 bg-white info-check w-75 my-4 rounded-2">
        <div className="form-top my-3 gap-2 d-flex flex-column align-items-start justify-content-between">
          <h4>Ваши данные</h4>
          <div className="m-0 p-0">
            <p className="border-danger m-0 border-bottom-1">Физическое лицо</p>
          </div>
        </div>
        <form className="form w-100 d-flex flex-column align-items-start gap-3">
          <label
            htmlFor="userName"
            className="form-label w-75 d-flex justify-content-between align-items-center gap-1"
          >
            <h6 className="w-25 fw-normal text-secondary">
              <span className="text-danger mx-1">*</span>
              Имя
            </h6>
            <input type="text" className="form-control w-50 border-warning" />
          </label>
          <label
            htmlFor="userLast"
            className="form-label w-75 d-flex justify-content-between align-items-center gap-1"
          >
            <h6 className="w-25 fw-normal text-secondary">
              <span className="text-danger mx-1">*</span>
              Фамилия
            </h6>
            <input
              type="text"
              id="userLast"
              className="form-control w-50 border-warning"
            />
          </label>
          <label
            htmlFor="userTel"
            className="form-label w-75 d-flex justify-content-between align-items-center gap-1"
          >
            <h6 className="w-25 fw-normal text-secondary">
              <span className="text-danger mx-1">*</span>
              Телефон
            </h6>
            <input
              type="number"
              id="userTel"
              className="form-control w-50 border-warning"
              placeholder="+998 (__) ___  _ _ _ _"
            />
          </label>
        </form>
      </div>
    </>
  );
};

export default Input;
