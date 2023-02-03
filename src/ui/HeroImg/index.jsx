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
          height={200}
          className="rounde"
        />
        <img
          src={Img2}
          alt="images"
          width={410}
          height={200}
          className="mt-3 rounde"
        />
      </div>
      <img src={Img3} alt="images" className="hero-round" width={240} height={418} />
    </>
  );
};

export default index;
