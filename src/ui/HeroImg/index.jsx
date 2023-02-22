import React from "react";
import Img1 from "./../../assets/images/side-1.jpeg";
import Img2 from "./../../assets/images/side-2.jpeg";
import Img3 from "./../../assets/images/side.jpeg";
import "./style.scss"
const index = () => {
  return (
    <>
      <div className="mx-1">
        <img
          src={Img1}
          alt="images"
          width={410}
          height={218}
          className="rounde rounded-3"
        />
        <img
          src={Img2}
          alt="images"
          width={410}
          height={218}
          className="mt-3 rounde rounded-3"
        />
      </div>
      <img src={Img3} alt="images" className="hero-round rounded-3" width={240} height={450} />
    </>
  );
};

export default React.memo(index);
