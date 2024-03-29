import React, { Component } from "react";
import Slider from "react-slick";
import { useState, useContext, useEffect } from "react";
import Img from "./../assets/images/im.jpg";
import { FcLike } from "react-icons/fc";
import { BsCartDashFill, BsCartPlusFill } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CartState } from "./../context/Auth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
const Responsive = () => {
  const {
    state: { product, cart, like, oneCart },
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

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div>
        <h2> Лучшая цена </h2>
        <Slider className="py-1" {...settings}>
          {product.map((e) => {
            return (
              <div key={e.id} className="card-slick bg-white p-3 border">
                {/* <BiHeart className="card-heart position-absolute" /> */}
                {like.some((p) => p.id === e.id) ? (
                  <div
                    className="w-100 slick-like position-absolute"
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
                    className="w-100 slick-like position-absolute"
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
                      onClick={goToTop}
                      className="text-black linl-slick"
                    >
                      <h5>{e.title}</h5>
                    </Link>
                  </div>
                  <div className="card-slick-footer w-100 d-flex justify-content-between align-items-center">
                    <div className="text-black fw-bold">{e.price} $</div>
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
                            dispatch({
                              type: "ADD__TO__PRODUCT",
                              payload: e,
                            })
                          }
                        />
                      </button>
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
export default Responsive;
