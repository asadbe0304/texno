import React from "react";
import Img4 from "./../../assets/images/beko.webp";
import Img3 from "./../../assets/images/bosch.webp";
import Img2 from "./../../assets/images/indesit.webp";
import Img1 from "./../../assets/images/lg.webp";
import "./style.scss"

const index = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-start align-items-center">
            <h3 className="fw-bold brand-title">
            Популярные бренды
            </h3>
        </div>
        <div className="d-flex brands-card px-4 py-4 my-4 flex-wrap justify-content-around align-items-center gap-2">
          <div className="card-brand border p-3 rounded-1">
            <img src={Img1} alt="images" width={150} height={80} />
          </div>
          <div className="card-brand border p-3 rounded-1">
            <img src={Img2} alt="images" width={150} height={80} />
          </div>
          <div className="card-brand border p-3 rounded-1">
            <img src={Img1} alt="images" width={150} height={80} />
          </div>
          <div className="card-brand border p-3 rounded-1">
            <img src={Img3} alt="images" width={150} height={80} />
          </div>
          <div className="card-brand border p-3 rounded-1">
            <img src={Img2} alt="images" width={150} height={80} />
          </div>
          <div className="card-brand border p-3 rounded-1">
            <img src={Img4} alt="images" width={150} height={80} />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
