import React, { Component } from "react";
import Slider from "react-slick";
import { useState, useContext, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { BsCartDashFill, BsCartPlusFill } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import Card from "./CateCard";
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
          slidesToShow: 1.9,
          slidesToScroll: 1,
          // initialSlide: 2,
          // centerMode: true,
          slidesPerRow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          infinite: true,
          slidesPerRow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          centerMode: false,
          infinite: true,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          slidesPerRow: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="recomendation-slick mt-4">
        <h3 className="m-0 ">Популярные категории</h3>
        <Slider className="p-0" {...settings}>
          {product.map((e) => {
            return <Card key={e.id} prop={e} />;
          })}
        </Slider>
      </div>
    </>
  );
};

export default index;
