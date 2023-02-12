import React from "react";
import Load from "./../Loader/index";
import { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiHeart } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { BsCartPlusFill, BsCartDashFill, BsStar } from "react-icons/bs";
import { FreeMode, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { CartState } from "./../../context/Auth";
import "./style.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";

const swiper = () => {
  const {
    state: { product, cart, like },
    dispatch,
  } = CartState();

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
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
            spaceBetween: 0,
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
            spaceBetween: 0,
            slidesPerView: 1,
          },
          475: {
            width: 410,
            slidesPerView: 1,
            spaceBetween: 0,
          },

          440: {
            width: 340,
            slidesPerView: 1,
            spaceBetween: 0,
          },
          415: {
            width: 320,
            slidesPerView: 1,
            spaceBetween: 0,
          },
          400: {
            width: 320,
            slidesPerView: 1,
          },
          390: {
            width: 310,
            spaceBetween: 0,
            slidesPerView: 1,
          },
          380: {
            width: 300,
            spaceBetween: 0,
            slidesPerView: 1,
          },
          370: {
            width: 280,
            spaceBetween: 0,
            slidesPerView: 1,
          },
          360: {
            width: 270,
            spaceBetween: 0,
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
            spaceBetween: 0,
            slidesPerView: 1,
          },
          310: {
            width: 230,
            spaceBetween: 0,
            slidesPerView: 1,
          },
          300: {
            width: 220,
            spaceBetween: 0,
            slidesPerView: 1,
          },
          240: {
            width: 220,
            spaceBetween: 0,
            slidesPerView: 1,
          },
        }}
        grabCursor={true}
        navigation={false}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper py-4 w-100"
      >
        {product.length > 0 ? (
          product.slice(0, 9).map((e) => {
            return (
              <SwiperSlide
                className="d-flex justify-content-center w-25 border swipe-card flex-column align-items-center px-3"
                key={e.id}
              >
                {/* <div className="card rounded-0 p-0 align-items-center py-4 position-relative"> */}
                <img src={e.image} alt="images" className="imgcard mx-auto" />
                <div className="card__body w-100">
                  <div className="card__body--top d-flex gap-3 justify-content-between align-items-center w-100">
                    <p className="text-black art-title my-3">{e.name}</p>
                    <span className="text-success nalichka fw-bold d-flex justify-content-between align-items-center gap-1">
                      В наличии
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
    </>
  );
};

export default swiper;

// breakpoints={{
//   1210: {
//     width: 1210,
//     slidesPerView: 4,
//   },
//   1000: {
//     width: 1000,
//     slidesPerView: 3,
//   },
//   768: {
//     width: 640,
//     slidesPerView: 2,
//     spaceBetween: 10,
//   },
//   720: {
//     width: 640,
//     slidesPerView: 2  ,
//     spaceBetween: 10,
//   },
//   690: {
//     width: 640,
//     slidesPerView: 2,
//     spaceBetween: 10,
//   },
//   670: {
//     width: 590,
//     slidesPerView: 2,
//     spaceBetween: 10,
//   },
//   640: {
//     width: 520,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },
//   630: {
//     width: 490,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },
//   620: {
//     width: 490,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },
//   600: {
//     width: 480,
//     slidesPerView: 1,
//   },
//   590: {
//     width: 470,
//     slidesPerView: 1,
//   },
//   580: {
//     width: 460,
//     slidesPerView: 1,
//   },

//   565: {
//     width: 460,
//     slidesPerView: 1,
//   },
//   550: {
//     width: 450,
//     slidesPerView: 1,
//   },
//   540: {
//     width: 440,
//     slidesPerView: 1,
//   },
//   530: {
//     width: 430,
//     slidesPerView: 1,
//   },
//   520: {
//     width: 420,
//     slidesPerView: 1,
//   },
//   510: {
//     width: 410,
//     slidesPerView: 1,
//   },
//   500: {
//     width: 400,
//     slidesPerView: 1,
//   },
//   490: {
//     width: 400,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },
//   480: {
//     width: 395,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },
//   470: {
//     width: 380,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },
//   460: {
//     width: 370,
//     slidesPerView: 1,
//     spaceBetween: 10,
//   },
//   455: {
//     width: 350,
//     slidesPerView: 1,
//     spaceBetween: 10,
//   },
//   450: {
//     width: 360,
//     slidesPerView: 1,
//     spaceBetween: 10,
//   },
//   440: {
//     width: 350,
//     slidesPerView: 1,
//     spaceBetween: 20,
//   },

//   430: {
//     width: 340,
//     slidesPerView: 1,
//     spaceBetween: 20,
//   },
//   420: {
//     width: 335,
//     slidesPerView: 1,
//     spaceBetween: 20,
//   },
//   410: {
//     width: 325,
//     slidesPerView: 1,
//     spaceBetween: 20,
//   },

//   400: {
//     width: 320,
//     slidesPerView: 1,
//     spaceBetween: 20,
//   },

//   390: {
//     width: 310,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },

//   380: {
//     width: 305,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },

//   370: {
//     width: 295,
//     spaceBetween: 20,
//     slidesPerView: 1,
//   },

//   360: {
//     width: 290,
//     spaceBetween: 20,
//     slidesPerView: 1,
//   },
//   358: {
//     width: 300,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },
//   365: {
//     width: 291,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },
//   // 363: {
//   //   width: 290,
//   //   spaceBetween: 10,
//   //   slidesPerView: 1,
//   // },
//   // 361: {
//   //   width: 289,
//   //   spaceBetween: 10,
//   //   slidesPerView: 1,
//   // },
//   360: {
//     width: 288,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },
//   358: {
//     width: 288,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },
//   354: {
//     width: 288,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },
//   352: {
//     width: 285,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },
//   350: {
//     width: 282,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },
//   349: {
//     width: 278,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },
//   348: {
//     width: 278,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },
//   345: {
//     width: 275,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },
//   340: {
//     width: 270,
//     slidesPerView: 1,
//   },
//   330: {
//     width: 260,
//     slidesPerView: 1,
//   },
//   320: {
//     width: 251,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },
//   310: {
//     spaceBetween: 10,
//     width: 241,
//     slidesPerView: 1,
//   },
//   305: {
//     width: 235,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },
//   300: {
//     width: 230,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },
//   280: {
//     width: 225,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },
//   270: {
//     width: 220,
//     spaceBetween: 10,
//     slidesPerView: 1,
//   },
//   240: {
//     width: 220,
//     spaceBetween: 30,
//     slidesPerView: 1,
//   },
//   140: {
//     width: 200,
//     spaceBetween: 30,
//     slidesPerView: 1,
//   },
// }}
