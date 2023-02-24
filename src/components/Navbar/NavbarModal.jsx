import React from "react";
import Img from "./../../assets/images/holod.png";
import { useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { CartState } from "../../context/Auth";
import Skeleton from "../../lib/Skeletono/skeletono";
const NavbarModal = () => {
  const {
    state: { category, modal },
    dispatch,
  } = CartState();
  // const {info} =useParams()
  // console.log(info);
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = modal ? "hidden" : "auto";
  }, [modal]);
  return (
    <>
      <div className="container">
        <div
          className={`modal-layer ${
            modal ? "modal-mobile-block" : "modal-mobile-none"
          } category-modal d-flex justify-content-between flex-row bg-white w-100`}
        >
          <div className="modal-left w-100">
            <ul className="modal-list d-flex flex-column align-items-start  border-0">
              {category.length > 0 ? (
                category.map((e) => {
                  return (
                    <li key={e} className="modal-item">
                      <Link
                        to={`/catproduct`}
                        onClick={() =>
                          dispatch({ type: "MODAL", payload: false })
                        }
                        className="text-black text-uppercase text-decoration-none fw-bold d-flex justify-content-start align-items-center gap-2"
                      >
                        <img src={Img} alt="imagea" width={24} height={24} />
                        {e}
                      </Link>
                    </li>
                  );
                })
              ) : (
                <Skeleton />
              )}
            </ul>
          </div>
          {/* <div
                className="modal-right w-100 d-flex
            justify-content-between align-items-start gap-2 px-2"
              >
                <div className="modal__inner">
                  <ul className="modal-list">
                    <li className="modal__inner-item">
                      <a
                        href="#link"
                        className="text-decoration-none text-black"
                      >
                        Holodilnik
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="modal__inner--right ">
                  <h3>Modal right</h3>
                </div>
              </div> */}
        </div>
      </div>
    </>
  );
};

export default NavbarModal;
