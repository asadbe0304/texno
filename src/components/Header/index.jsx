import React, { useContext } from "react";
import "./style.scss";
import Img from "./../../assets/images/logo.png";
import Logo from "./../../assets/images/mobile.svg"
import { FiNavigation, FiShoppingCart } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { RiAdminFill } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { Badge } from "react-bootstrap";
import Cart from "../../ui/Cart/index";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import { CartState } from "./../../context/Auth";
import { IoMdClose } from "react-icons/io";
const index = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);  
  const [sticky, setSticky] = useState("");
 
 const {state: {cart}} = CartState()

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 120 ? setSticky("sticky") : setSticky("");
    }
  };


  return (
    <>
      <header className={`w-100 bg-white ${sticky}`}>
        <div className="container">
          <Cart show={show} />
          {/* <Cart/> */}
          <div className="header w-100 py-2 d-flex justify-content-between align-items-center">
            <div className="head d-flex justify-content-center align-items-center gap-4">
              <div className="header__logo">
                <Link to="/" className="header__logo--link">
                  <img
                    src={Img}
                    className="header__logo--img"
                    alt="images logo"
                  />
                </Link>
                <Link>
                <img src={Logo} alt="logo"
                className="mobile_logo" />
                </Link>
              </div>
              <div className="header__location d-flex flex-column align-items-start navigation">
                <div className="d-flex justify-content-center align-items-center gap-1 fs-6 text-black">
                  <FiNavigation className="text-danger navi" />
                  <p className="m-0">Ваш город</p>
                </div>
                Sankt peterburg
              </div>
            </div>

            <div className="header__search d-flex justify-content-center align-itmes-center">
              {/* search bar */}
              <InputGroup className="mb-0 search-bar">
                <Form.Control
                  placeholder="Search Products"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text
                  id="basic-addon1"
                  className="bg-warning border-0 rounded-0"
                >
                  <BsSearch className="text-white fw-bold" />
                </InputGroup.Text>
              </InputGroup>
            </div>
            <InputGroup className=" bg-white mobile__search--bar position-absolute top-0 left-0 right-0 $zindex-modal">
              <Form.Control
                placeholder="Search Products"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <InputGroup.Text
                id="basic-addon1"
                className="bg-warning border-0 rounded-0"
              >
                <BsSearch className="text-white fw-bold" />
              </InputGroup.Text>
            </InputGroup>

            <div className="header__call">
              <a
                href="tel:++998932502719"
                className="fw-bold header__call--tel text-black"
              >
                +7 (812) 200-49-00
              </a>
              <div className="d-flex flex-column align-items-start justify-content-center">
                <p className="m-0 p-0 text-secondary call__text">
                  +7 (800) 777-04-02
                </p>
                <p className="m-0 p-0 text-secondary call__text">
                  пн-пт, 10:00-19:00
                </p>
              </div>
            </div>
            <div className="header__inner align-items-center d-flex justify-content-between gap-3">
              {/* mobile search bar */}
              {/* <div
                className="mobile-search-btn m-0"
                onClick={(e) => dispatch({ type: "SET_SEARCH", payload: true })}
              >
                <InputGroup.Text
                  id="basic-addon1"
                  className="bg-warning border-0 rounded-2 m-0"
                >
                  <BsSearch className="text-white fw-bold" />
                </InputGroup.Text>
              </div> */}
              <div className="header__like--order d-flex justify-content between">
                <div className="admin">
                  <NavLink to="/login" className={"text-black"}>
                    <RiAdminFill className="admin__icon" />
                  </NavLink>
                </div>
                <div className="like">
                  <FcLike className="like__icon" />
                </div>
              </div>
              <div className="header__cart position-relative gap-2 d-flex align-items-center justify-content-between">
                <FiShoppingCart
                  onClick={() => setShow((e) => !e)}
                  className="header__shopping--cart pointer"
                />
                <Badge bg="danger" className=" badge">
                  {cart.length}
                </Badge>
                <p className="p-0 mx-2 my-0 order__text">
                  В корзине {cart.length} товаров
                </p>
                <GiHamburgerMenu
                  className="Hambur"
                  onClick={() => setOpen((e) => !e)}
                />
                <IoMdClose
                  className={`position-fixed close-arrow ${
                    show ? "show" : "hide"
                  }`}
                  onClick={() => setShow((e) => !e)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* modal menu */}
        <div
          className={`modal-menu bg-light w-100 flex-column d-flex justify-content-start align-items-start ${
            open ? "d-flex" : "d-none"
          }`}
        >
          <div className="modal__top px-3 bg-black w-100 flex-row d-flex justify-content-between align-items-center gap-1">
            <div className="header__location-mobile text-white gap-2 py-2 d-flex  align-items-start navigation">
              <div className="d-flex justify-content-center fw-normal align-items-center gap-1 fs-6 text-black">
                <FiNavigation className="text-danger navi" />
                <p className="m-0 text-white ">Ваш город</p>
              </div>
              Sankt peterburg
            </div>
            <IoMdClose
              className="text-white"
              onClick={() => setOpen((e) => !e)}
            />
          </div>
          <div
            className="header__call py-3 d-flex
         px-3 justify-content-between gap-2 align-items-start flex-column"
          >
            <a
              href="tel:+998932502719"
              className="fw-bold header__call--tel text-black"
            >
              +7 (812) 200-49-00
            </a>
            <div className="d-flex flex-column align-items-start justify-content-between gap-2">
              <p className="m-0 p-0 text-secondary call__text">
                +7 (800) 777-04-02
              </p>
              <p className="m-0 p-0 text-secondary call__text">
                пн-пт, 10:00-19:00
              </p>
            </div>
          </div>
          <button
            href="#li"
            className="w-100 btn fw-bold btn btn-warning rounded-0 d-flex text-black gap-2 align-items-center"
            // onClick={() => setModal((e) => !e)}
          >
            {/* {modal ? (
                    <IoMdClose className="menu__category" />
                  ) : (
                    <GiHamburgerMenu className="menu__category" />
                  )} */}
            Category
          </button>
          <ul className="flex-row list-group d-flex flex-column justify-content-between p-0 px-3 modal-mobile-list align-items-start gap-3">
            <li className="list-items">
              <a href="#li" className="modal-link text-black fw-bold">
                Акции
              </a>
            </li>
            <li className="list-items">
              <a href="#li" className="modal-link text-black fw-bold">
                Оплата
              </a>
            </li>
            <li className="list-items">
              <a href="#li" className="modal-link text-black fw-bold">
                Установка
              </a>
            </li>
            <li className="list-items">
              <a href="#li" className="modal-link text-black fw-bold">
                Обмен и возврат
              </a>
            </li>
            <li className="list-items">
              <a href="#li" className="modal-link text-black fw-bold">
                Для бизнеса
              </a>
            </li>
            <li className="list-items">
              <a href="#li" className="modal-link text-black fw-bold">
                Контакты
              </a>
            </li>
            <li className="list-items">
              <a href="#li" className="modal-link text-black fw-bold">
                Статус заказа
              </a>
            </li>
            <li className="list-items">
              <a href="#li" className="modal-link text-black fw-bold">
                Доставка
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default index;
