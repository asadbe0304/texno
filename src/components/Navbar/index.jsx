import React from "react";
import Form from "react-bootstrap/Form";
import ModalNav from "./NavbarModal";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./stye.scss";
const index = () => {
  
  const [modal, setModal] = useState(false);

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
      windowHeight > 120 ? setSticky("navsticky") : setSticky("");
    }
  };

  return (
    <>
      <div className={`navbar position-relative ${sticky}`}>
        <div className="container">
          <nav className="d-flex justify-content-between nav flex-row align-items-center">
            <div className="d-flex search-mobile-bar justify-content-center bg-white align-items-center flex-row">
              <Form.Control
                placeholder="Search Products"
                aria-label="Username"
                aria-describedby="basic-addon1"
                className={`search-mobile `}
              />
            </div>
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
                <NavLink to="/cate" className="underline-none fw-bold">
                  Доставка
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <ModalNav modal={modal} />
      {/* </div> */}
    </>
  );
};

export default index;
