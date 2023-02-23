import React, { Component } from "react";
import Slider from "react-slick";
import { useState, useContext, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { motion } from "framer-motion";
import { BsCartDashFill, BsCartPlusFill } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import Load from "./../../ui/Loader/index";
import { Link } from "react-router-dom";
import { CartState } from "./../../context/Auth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
const index = () => {
  const {
    state: { product, cart, like },
    dispatch,
  } = CartState();

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    infinite: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3.4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2,
          // centerMode: true,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="recomendation-slick">
        <div className="d-flex justify-content-between align-items-center gap-3">
          <h3 className="recomendation__title">Наши рекомендации</h3>
        </div>
        <Slider className="py-1 w-100" {...settings}>
          {product.map((e, i) => {
            return (
              <div key={e.id} className="card-slick bg-white p-3 border">
                {/* <BiHeart className="card-heart position-absolute" /> */}
                {like.some((p) => p.id === e.id) ? (
                  <div
                    className="w-100 slick-like position-absolute bottom-0"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE__TO__LIKE",
                        payload: e,
                      })
                    }
                  >
                    <FcLike className="position-absolute card-heart" />
                  </div>
                ) : (
                  <div
                    className="w-100 slick-like position-absolute bottom-0"
                    onClick={() =>
                      dispatch({
                        type: "ADD__TO__LIKE",
                        payload: e,
                      })
                    }
                  >
                    <BiHeart className="position-absolute card-heart" />
                  </div>
                )}
                <img src={e.image} className="img-slick" alt={e.title} />
                <div className="card-slick-body w-100 ">
                  <div className="d-flex justify-content-between card-slick-top align-items-center w-100">
                    <span className="slick-code-title">Art:5345549</span>
                    <span className="text-success fw-bold text-style-dot">
                      В наличии
                    </span>
                  </div>
                  <div className="card-slick-title w-100">
                    <Link
                      to={`/product/${e.id}`}
                      className="text-black linl-slick"
                    >
                      <h5>{e.title}</h5>
                    </Link>
                  </div>
                  <div className="card-slick-footer  w-100 d-flex justify-content-between align-items-center">
                    <div className="text-black fw-bold">{e.price} $</div>
                    {cart.some((p) => p.id === e.id) ? (
                      <motion.div
                        whileTap={{ scale: 0.9 }}
                        className="bg-danger  border-0 px-2 py-1 rounded-2"
                      >
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
                      </motion.div>
                    ) : (
                      <motion.div
                        whileTap={{ scale: 0.9 }}
                        className="bg-warning  border-0 px-2 py-1 rounded-2"
                      >
                        <BsCartPlusFill
                          className="shop-cart"
                          type="button"
                          onClick={() =>
                            dispatch({
                              type: "ADD__TO__PRODUCT",
                              payload: e,
                            })
                          }
                        />
                      </motion.div>
                    )}
                  </div>
                  <Link to={"/check"} className="p-0 w-100">
                    {cart.some((p) => p.id === e.id) ? (
                      <button
                        className="btn btn-outline-warning mt-2 w-100"
                        onClick={() =>
                          dispatch({
                            type: "ADD__TO__PRODUCT",
                            payload: e,
                          })
                        }
                      >
                        One Click
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-warning mt-2 w-100"
                        onClick={() =>
                          dispatch({
                            type: "ADD__TO__PRODUCT",
                            payload: e,
                          })
                        }
                      >
                        One Click
                      </button>
                    )}
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default index;
