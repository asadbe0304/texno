import React from "react";

const index = () => {
  return (
    <div className="d-flex p-2 gap-4 justify-content-between flex-wrap align-items-center w-100 footer-inner">
      <div className="fw-bold text-dark">
        © 2015-{new Date().getFullYear()} «Империя Техно»
      </div>
      <div className="">
        Время : 
        <span className="mx-2">
           2.3c 
        </span>
      </div>
      <div className="text-dark fw-bold">Интернет-магазин бытовой техники</div>
    </div>
  );
};

export default index;
