import React from "react";
import "./style.scss";

const index = () => {
  return (
    <>
      <div className=" col-10 px-3 w-100 d-flex justify-content-center skeleton align-items-center">
        <div className="lazy  mx-1">
          <div className="movie--isloading">
            <div className="loading-image"></div>
            <div className="loading-content">
              <div className="loading-text-container">
                <div className="loading-main-text"></div>
                <div className="loading-sub-text"></div>
              </div>
              <div className="loading-btn"></div>
            </div>
          </div>
        </div>
        <div className="lazy  mx-1">
          <div className="movie--isloading">
            <div className="loading-image"></div>
            <div className="loading-content">
              <div className="loading-text-container">
                <div className="loading-main-text"></div>
                <div className="loading-sub-text"></div>
              </div>
              <div className="loading-btn"></div>
            </div>
          </div>
        </div>
        <div className="lazy  mx-1">
          <div className="movie--isloading">
            <div className="loading-image"></div>
            <div className="loading-content">
              <div className="loading-text-container">
                <div className="loading-main-text"></div>
                <div className="loading-sub-text"></div>
              </div>
              <div className="loading-btn"></div>
            </div>
          </div>
        </div>
        <div className="lazy  mx-1">
          <div className="movie--isloading">
            <div className="loading-image"></div>
            <div className="loading-content">
              <div className="loading-text-container">
                <div className="loading-main-text"></div>
                <div className="loading-sub-text"></div>
              </div>
              <div className="loading-btn"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
