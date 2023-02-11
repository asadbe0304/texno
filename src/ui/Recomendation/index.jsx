import React from "react";
import Spin from "./../../components/Spin/spin";
import Img from "./../../assets/images/im.jpg";
import Load from "./../Loader/index";
import { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiHeart } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import SwiperJs  from "./swiper";
import { BsCartPlusFill, BsCartDashFill, BsStar } from "react-icons/bs";
import { FreeMode, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { CartState } from "./../../context/Auth";
import "./style.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./style.scss";

const index = () => {
  const [spin, setSpin] = useState(false);
  // const {
  //   state: { product, cart, like },
  //   dispatch,
  // } = CartState();

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setData(json);
  //       setSpin(true);
  //     })
  //     .catch(setSpin(true))
  //     .finally(setSpin(false));
  // }, []);
  return (
    <>
      {/* <Spin spin={spin} /> */}
      <div className="recomendation d-flex flex-column w-100 justify-content-between align-items-center">
        <div className="recomendation__top py-1 d-flex justify-content-between align-items-center w-100">
          <h3 className="recomendation__title">Наши рекомендации</h3>
          <div className="d-flex justify-content-between align-items-center gap-3">
            {/* <BsArrowLeft  className="swiper-button-next"/>
            <BsArrowRight className="swiper-button-prev"/> */}
          </div>
        </div>
      </div>
      <div className="recomendation__card w-100 ">
     <SwiperJs/>
      </div>
    </>
  );
};

export default index;
