import React from "react";
import { FiNavigation} from "react-icons/fi";
import { Link} from "react-router-dom";
import Logo from "./../../assets/images/mobile.svg";
import Img from "./../../assets/images/logo.png";
const location = () => {
  return (
    <>
      <div className="header__logo">
        <Link to="/" className="header__logo--link">
          <img src={Img} className="header__logo--img" alt="images logo" />
        </Link>
        <Link>
          <img src={Logo} alt="logo" className="mobile_logo" />
        </Link>
      </div>
      <div className="header__location d-flex flex-column align-items-start navigation">
        <div className="d-flex justify-content-center align-items-center gap-1 fs-6 text-black">
          <FiNavigation className="text-danger navi" />
          <p className="m-0">Ваш город</p>
        </div>
        Sankt peterburg
      </div>
    </>
  );
};

export default location;
