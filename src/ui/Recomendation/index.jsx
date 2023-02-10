import React from "react";
// import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiHeart } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { BsCartPlusFill, BsCartDashFill } from "react-icons/bs";
import { FreeMode, Navigation } from "swiper";
import Img from "./../../assets/images/im.jpg";
import Load from "./../Loader/index";
import { Link } from "react-router-dom";
import Spin from "./../../components/Spin/spin";
import { CartState } from "./../../context/Auth";
import "./style.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./style.scss";

const index = () => {
  const [spin, setSpin] = useState(false);
  const {
    state: { product, cart, like },
    dispatch,
  } = CartState();

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
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
       
          loop={false}
          loopFillGroupWithBlank={false}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1210: {
              width: 1210,
              slidesPerView: 4,
            },
            1000: {
              width: 1000,
              slidesPerView: 3,
            },
            768: {
              width: 640,
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              width: 650,
              slidesPerView: 2,
            },
            600: {
              width: 520,
              slidesPerView: 1,
            },
            580: {
              width: 520,
            },
            565: {
              width: 480,
              slidesPerView: 1,
            },
            550: {
              width: 475,
              slidesPerView: 1,
            },
            540: {
              width: 470,
              slidesPerView: 1,
            },
            530: {
              width: 460,
              slidesPerView: 1,
            },
            490: {
              width: 425,
              spaceBetween: 10,
              slidesPerView: 1,
            },
            475: {
              width: 410,
              slidesPerView: 1,
              spaceBetween: 20,
            },

            440: {
              width: 340,
              slidesPerView: 1,
              spaceBetween: 20,
            },
            415: {
              width: 320,
              slidesPerView: 1,
              spaceBetween: 20,
            },
            400: {
              width: 320,
              slidesPerView: 1,
            },
            390: {
              width: 310,
              spaceBetween: 20,
              slidesPerView: 1,
            },
            380: {
              width: 300,
              spaceBetween: 20,
              slidesPerView: 1,
            },
            370: {
              width: 280,
              spaceBetween: 20,
              slidesPerView: 1,
            },
            360: {
              width: 270,
              spaceBetween: 20,
              slidesPerView: 1,
            },
            350: {
              width: 260,
              slidesPerView: 1,
            },
            335: {
              width: 250,
              slidesPerView: 1,
            },
            320: {
              width: 240,
              spaceBetween: 10,
              slidesPerView: 1,
            },
            310: {
              width: 230,
              spaceBetween: 10,
              slidesPerView: 1,
            },
            300: {
              width: 220,
              spaceBetween: 10,
              slidesPerView: 1,
            },
            240: {
              width: 220,
              spaceBetween: 30,
              slidesPerView: 1,
            },
          }}
          grabCursor={true}
          navigation={false}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          className="mySwiper px-4 d-flex justify-content-center py-3 gap-1 align-items-center"
        >
          {product.length > 0 ? (
            product.map((e) => {
              return (
                <SwiperSlide
                  // item={item}
                  className="d-flex justify-content-around border rounded-2 swipe-card flex-column align-items-center px-3"
                  key={e.id}
                >
                  {/* <div className="card rounded-0 p-0 align-items-center py-4 position-relative"> */}
                  <img src={e.image} alt="images" className="imgcard mb-4" />
                  <div className="card__body w-100">
                    <div className="card__body--top d-flex gap-3 justify-content-between align-items-center w-100">
                      <h4 className="fs-6 text-black fw-medium art-title my-3">
                        Art televison
                      </h4>
                      <span className="text-success nalichka fw-bold">
                        Рате: {"0"}
                      </span>
                    </div>
                    <Link
                      to={"/:pro"}
                      className="underline-none p-0 d-flex justify-content-between align-items-start flex-column"
                    >
                      <h4 className="card-title">{e.name}</h4>
                    </Link>
                    <div className="card__footer w-100 d-flex justify-content-between align-items-center gap-2">
                      <h5 className="card__footer--title text-black m-0">
                        {e.price} $
                      </h5>
                      {cart.some((p) => p.id === e.id) ? (
                        <button className="bg-danger  border-0 px-2 py-1 rounded-2">
                          <BsCartDashFill
                            className="shop-cart"
                            type="button"
                            onClick={() =>
                              dispatch({
                                type: "REMOVE__TO__PRODUCT",
                                payload: e,
                              })
                            }
                          />
                        </button>
                      ) : (
                        <button className="bg-warning  border-0 px-2 py-1 rounded-2">
                          <BsCartPlusFill
                            className="shop-cart"
                            type="button"
                            onClick={() =>
                              dispatch({ type: "ADD__TO__PRODUCT", payload: e })
                            }
                          />
                        </button>
                      )}
                      {like.some((p) => p.id === e.id) ? (
                        <div
                          onClick={() =>
                            dispatch({
                              type: "REMOVE__TO__LIKE",
                              payload: e,
                            })
                          }
                        >
                          <FcLike className="position-absolute like-heart" />
                        </div>
                      ) : (
                        <div
                        onClick={() =>
                          dispatch({
                            type: "ADD__TO__LIKE",
                            payload: e,
                          })
                        }
                      >
                        <BiHeart className="position-absolute like-heart" />
                      </div>
                      )}
                    </div>
                  </div>
                  {/* </div>   */}
                </SwiperSlide>
              );
            })
          ) : (
            <Load />
          )}
        </Swiper>
      </div>
    </>
  );
};

export default index;
