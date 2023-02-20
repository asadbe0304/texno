import React from "react";
import "./style.scss";
import Img from "./../../assets/images/im-removebg-preview.png";

const Card = ({prop}) => {
  // const  {prod: {id , image}} = prod
  // console.log(prop);
  return (
    <>
      <div key={prop.id} className="card__popular d-flex align-items-center gap-2 flex-column justify-content-between bg-dark p-2">
        <img src={prop.image} className="img-card position-absolute " alt="images" />
       <div className="d-flex justify-content-center px-4 align-items-center w-100 flex-row">
        <h6 className="fw-bold category-cap text-white text-end m-0 my-2">Холодильники</h6>
       </div>
      </div>
    </>
  );
};

export default Card;
