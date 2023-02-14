import React from "react";
import ModalNav from "./NavbarModal";
import NavSearch from "./NavSearch";
import Skeloton from "./../Skeletono/Skeleton"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CartState } from "../../context/Auth";
import "./stye.scss";
const index = () => {

  const [modal, setModal] = useState(false);
  const {
    state: { product,}, dispatch
  } = CartState();


  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = modal ? "hidden" : "auto";
  }, [modal]);
  
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = modal ? "hidden" : "auto";
  }, [modal]);

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
           <NavSearch/>
            <div className="category__tab w-100">
              <button
                className="rounded-2 btn w-100 fw-bold btn btn-warning rounded-0 d-flex text-black gap-2 align-items-center"
                onClick={() => setModal((e) => !e)}
              >
                {modal ? (
                  <IoMdClose className="menu__category" />
                ) : (
                  <GiHamburgerMenu className="menu__category" />
                )}
                Category
              </button>
            </div>
            <ul className="flex-row list-group d-flex justify-content-between nav-list align-items-center">
              <li className="list-items">
                <button
                  href="#li"
                  className="underline-none btn fw-bold btn btn-warning rounded-0 d-flex text-black gap-2 align-items-center"
                  onClick={() => setModal((e) => !e)}
                >
                  {modal ? (
                    <IoMdClose className="menu__category" />
                  ) : (
                    <GiHamburgerMenu className="menu__category" />
                  )}
                  Category
                </button>
              </li>
              <li className="list-items">
                <a href="#li" className="underline-none fw-bold">
                  Акции
                </a>
              </li>
              <li className="list-items">
                <a href="#li" className="underline-none fw-bold">
                  Оплата
                </a>
              </li>
              <li className="list-items">
                <a href="#li" className="underline-none fw-bold">
                  Установка
                </a>
              </li>
              <li className="list-items">
                <a href="#li" className="underline-none fw-bold">
                  Обмен и возврат
                </a>
              </li>
              <li className="list-items">
                <a href="#li" className="underline-none fw-bold">
                  Для бизнеса
                </a>
              </li>
              <li className="list-items">
                <a href="#li" className="underline-none fw-bold">
                  Контакты
                </a>
              </li>
              <li className="list-items">
                <a href="#li" className="underline-none fw-bold">
                  Статус заказа
                </a>
              </li>
              <li className="list-items">
                <a href="#l" className="underline-none fw-bold">
                  Доставка
                </a>
              </li>
              <li className="list-items">
                <NavLink to={"/admin"} className="underline-none fw-bold">
                  <GiSettingsKnobs style={{width:"25px", height:"25px"}} className="text-warning"/>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    
      <ModalNav modal={modal} />
      <div
        className={`modal-layer-mobile ${
          modal ? "modal-mobile-block" : "modal-mobile-none"
        } category-modal flex-column d-flex justify-content-start flex-row bg-white w-100`}
      >
        <div className="d-flex p-3 w-100 bg-white justify-content-end align-items-center">
          <IoMdClose
            onClick={() => setModal((e) => !e)}
            className=""
            style={{ width: "25px", height: "25px" }}
          />
        </div>
        <div className="modal-left w-100">
          <ul className="modal-list d-flex flex-column align-items-start  border-0">
            {product.length > 0 ? (
              product.map((e) => {
                return (
                  <li key={e.id} className="modal-item">
                    <NavLink
                      to="/catproduct"
                      onClick={() => setModal(false)}
                      className="text-black text-uppercase text-decoration-none fw-bold d-flex justify-content-start align-items-center gap-2"
                    >
                      {e.category}
                    </NavLink>
                  </li>
                );
              })
            ) : (
              <Skeloton/>
            )}
          </ul>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default index;
