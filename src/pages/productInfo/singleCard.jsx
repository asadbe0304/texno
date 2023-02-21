import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { BsCartDashFill, BsCartPlusFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { CartState } from "../../context/Auth";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Rating from "./Rating";

const singleCard = ({ prod }) => {
  const {
    state: { cart, like },
    dispatch,
  } = CartState();
  const { id, title, image, price, rating } = prod;
  // console.log(rating);
  return (
    <>
      <div className="product-card d-flex w-25 flex-column position-relative align-items-center justify-content-center ">
        {like.some((p) => p.id === id) ? (
          <div
            className="position-absolute wish"
            onClick={() =>
              dispatch({
                type: "REMOVE__TO__LIKE",
                payload: prod,
              })
            }
          >
            <FcLike className="like-heart" />
          </div>
        ) : (
          <div
            className="position-absolute wish"
            onClick={() =>
              dispatch({
                type: "ADD__TO__LIKE",
                payload: prod,
              })
            }
          >
            <BiHeart className="like-heart" />
          </div>
        )}
        <img src={image} alt={"images"} />
        <div className="m-0 p-0 single-porduct">
          <div className="w-100 d-flex single-rating align-items-center justify-content-between my-3">
            <div className="d-flex justfiy-content-between align-items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="mx-0 d-flex align-items-center gap-1 "
                  // onClick={() => onClick(i)}
                >
                  {Math.round(rating.rate) > i ? (
                    <AiFillStar className="text-danger" fontSize="15px" />
                  ) : (
                    <AiOutlineStar className="text-danger" fontSize="15px" />
                  )}
                </span>
              ))}
              {/* {rating.rate} */}
            </div>
            <a href="#link" className="underline-none p-0 text-secondary otziv">
              {rating.count} otziv
            </a>
          </div>
          <div className="d-flex justify-content-between flex-wrap align-items-center w-100">
            <span className="fw-small otziv text-black">Арт:283773</span>
            <span className="text-success fw-bold m-0 p-0 nalichka ">
              В наличии
            </span>
          </div>
          <Link
            to={`/product/${id}`}
            className="underline-none p-0 d-flex justify-content-start align-items-start w-100 mt-2"
          >
            <h5 className="text-black popular-title  w-100">{title}</h5>
          </Link>
          <div className="product__footer d-flex justify-content-between w-100 align-items-center">
            <div className="text-uppercase price-title postion-relative ">
              {price} $
            </div>
            {cart.some((p) => p.id === id) ? (
              <button className="bg-danger  border-0 px-2 py-1 rounded-2">
                <BsCartDashFill
                  className="shop-cart"
                  type="button"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE__TO__PRODUCT",
                      payload: prod,
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
                      payload: prod,
                    })
                  }
                />
              </button>
            )}
            {/* <button className="btn btn-info">
            <Link to={`/product/${id}`}>One click</Link>
          </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default singleCard;
