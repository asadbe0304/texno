import React from "react";
import ModalNav from "./NavbarModal";
import MobileDeviceModal from "./ModalMobile";
import ModalDesktop from "./Modal";
import NavBtn from "./btn";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import { CartState } from "../../context/Auth";
import "./stye.scss";
const index = () => {
  const [sticky, setSticky] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 152 ? setSticky("navsticky") : setSticky("");
    }
  };

  return (
    <>
      <div className={`navbar position-relative ${sticky}`}>
        <div className="container">
          <nav className="d-flex justify-content-between nav flex-row align-items-center">
            <NavBtn />
            {/* modal desktop */}
            <ModalDesktop />
            {/* modal desktop */}
          </nav>
        </div>
      </div>
      {/* desktop modal navbar menu */}
      <ModalNav />
      {/* desktop modal navbarmenu */}
      {/* modal mobile device */}
      <MobileDeviceModal />
      {/* modal mobile device end */}
    </>
  );
};

export default index;
