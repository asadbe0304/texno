import React from "react";
import "./style.scss";

const index = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container">
          <div className="d-flex error-page justify-content-center align-items-center w-100 flex-column">
            <h1 className="fw-bold my-2 text-warning">404</h1>
            <p className="fw-bold text-warning fs-3">Not found Pages!!!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
