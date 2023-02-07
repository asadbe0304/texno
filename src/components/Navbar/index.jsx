import React from "react";
import "./stye.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiArcheryTarget } from "react-icons/gi";
import Form from "react-bootstrap/Form";
import Img from "./../../assets/images/holod.png";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const index = () => {

  const [modal, setModal] = useState(false);
  const [categrory, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories/")
      .then((res) => res.json())
      .then((json) => setCategory(json));
  }, []);

  // const data = useDispatch();
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

          {/* modal navbar */}
          {/* <div className={`modal-layer ${modal ? "d-flex" : "d-none"}`}> */}
          <div
            className={`modal-layer ${
              modal ? "d-flex" : "d-none"
            } category-modal d-flex justify-content-between flex-row bg-white w-100`}
          >
            <div className="modal-left w-100">
              <ul className="modal-list d-flex flex-column align-items-start  border-0">
                <li className="modal-item">
                  <NavLink
                    to="/catproduct"
                    onClick={() => setModal(false)}
                    className="text-black text-decoration-none fw-bold d-flex justify-content-start align-items-center gap-2"
                  >
                    {/* <GiArcheryTarget className="archer" /> */}
                    <img src={Img} alt="imagea" width={24} height={24} />
                    Встраиваемая кухонная техника
                  </NavLink>
                </li>
                <li className="modal-item">
                  <a
                    href="#link"
                    className="text-black text-decoration-none fw-bold d-flex justify-content-start align-items-center gap-2"
                  >
                    <img src={Img} alt="imagea" width={24} height={24} />
                    {/* <GiArcheryTarget className="archer" /> */}
                    Крупная бытовая техника
                  </a>
                </li>
                <li className="modal-item">
                  <a
                    href="#link"
                    className="text-black text-decoration-none fw-bold d-flex justify-content-start align-items-center gap-2"
                  >
                    <img src={Img} alt="imagea" width={24} height={24} />
                    {/* <GiArcheryTarget className="archer" /> */}
                    Телевизоры, аудио-видео, Hi-Fi
                  </a>
                </li>
                <li className="modal-item">
                  <a
                    href="#link"
                    className="text-black text-decoration-none fw-bold d-flex justify-content-start align-items-center gap-2"
                  >
                    {/* <GiArcheryTarget className="archer" /> */}
                    <img src={Img} alt="imagea" width={24} height={24} />
                    Мелкая кухонная техника
                  </a>
                </li>
                <li className="modal-item">
                  <a
                    href="#link"
                    className="text-black text-decoration-none fw-bold d-flex justify-content-start align-items-center gap-2"
                  >
                    <img src={Img} alt="imagea" width={24} height={24} />
                    {/* <GiArcheryTarget className="archer" /> */}
                    Tехника для дома
                  </a>
                </li>
                <li className="modal-item">
                  <a
                    href="#link"
                    className="text-black text-decoration-none fw-bold d-flex justify-content-start align-items-center gap-2"
                  >
                    <img src={Img} alt="imagea" width={24} height={24} />
                    {/* <GiArcheryTarget className="archer " /> */}
                    Климатическая техника
                  </a>
                </li>
                <li className="modal-item">
                  <a
                    href="#link"
                    className="text-black text-decoration-none fw-bold d-flex justify-content-start align-items-center gap-2"
                  >
                    <img src={Img} alt="imagea" width={24} height={24} />
                    {/* <GiArcheryTarget className="archer" /> */}
                    Встраиваемая кухонная техника
                  </a>
                </li>
                <li className="modal-item">
                  <a
                    href="#link"
                    className="text-black text-decoration-none fw-bold d-flex justify-content-start align-items-center gap-2"
                  >
                    <img src={Img} alt="imagea" width={24} height={24} />
                    {/* <GiArcheryTarget className="archer" /> */}
                    Встраиваемая кухонная техника
                  </a>
                </li>
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
      </div>
      {/* </div> */}
    </>
  );
};

export default index;
