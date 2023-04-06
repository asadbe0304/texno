import React from "react";
import "./style.scss";
import { motion } from "framer-motion";

import Img from "./../../assets/images/im-removebg-preview.png";

const Card = ({ prop }) => {
 
  
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <motion.div whileTap={{scale: 0.9}} whileHover={{scale: 1.}} key={prop.id} className="m-0 p-0">
        <div className="card__popular d-flex align-items-center gap-2 flex-column justify-content-between bg-dark p-2">
          <img
            src={prop.image}
            className="img-card position-absolute "
            alt="images"
          />
          <div className="d-flex justify-content-center px-4 align-items-center w-100 flex-row">
            <h6 className="fw-bold category-cap text-white text-end m-0 my-2">
              Холодильники
            </h6>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
