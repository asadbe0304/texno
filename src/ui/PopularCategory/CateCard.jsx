import React from "react";
import "./style.scss";
const CateCard = ({ prop }) => {
  return (
    <>
      <div className="cetegorytop bg-dark">
        <div className="categorytop-card position-absolute">
          <img src={prop.image} alt="images" width={134} height={134} />
          <h6 className="categrorytop-title  text-white my-3">{prop.title}</h6>
        </div>
      </div>
    </>
  );
};

export default CateCard;
