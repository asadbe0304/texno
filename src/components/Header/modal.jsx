import React from "react";
import "./style.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { BsCalendarWeek } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartState } from "../../context/Auth";
import { FiNavigation } from "react-icons/fi";
const modal = () => {
  const {
    state: { open, modal },
    dispatch,
  } = CartState();
  return (
    <>
      <div
        className={`modal-menu bg-light w-100 flex-column d-flex justify-content-start align-items-start ${
          open ? "open-modal" : "hide-modal"
        }`}
      >
        <div className="modal__top px-3 py-3 bg-black w-100 flex-row d-flex justify-content-between align-items-center gap-1">
          <div className="header__location-mobile text-white gap-2 py-1 d-flex  align-items-center navigation">
            <div className="d-flex justify-content-center fw-normal align-items-center gap-1 fs-6 text-black">
              <FiNavigation className="text-danger navi" />
              <p className="m-0 text-secondary fw-normal p-0 ">Ваш город</p>
            </div>
            Sankt peterburg
          </div>
          <IoMdClose
            className={`position-absolute modal-close ${
              open ? "d-block" : "d-none"
            }`}
            onClick={() => dispatch({ type: "OPEN", payload: false })}
          />
        </div>
        <div
          className="header__call py-3 d-flex
         px-3 justify-content-between gap-3 align-items-start flex-column"
        >
          <div className="d-flex flex-column align-items-start justify-content-between ">
            <a
              href="tel:+998932502719"
              className="fw-bold header__call--tel text-black"
            >
              <FaMobileAlt
                className="text-danger"
                style={{ width: "20px", height: "20px" }}
              />
              +7 (812) 200-49-00
            </a>
            <a
              href="tel:+99892565566"
              className="fw-bold header__call--tel p-0 m-0"
            >
              <FaMobileAlt
                className="text-danger"
                style={{ width: "20px", height: "20px", opacity: "0" }}
              />
              <span className="m-0 p-0 text-secondary text-secondary call__text">
                +7 (800) 777-04-02
              </span>
            </a>
          </div>
          <div className=" d-flex flex-column align-items-start gap-1">
            <p className="m-0 p-0 text-capitalize fw-bold d-flex align-items-center gap-2 text-black fs-6">
              <BsCalendarWeek
                className="text-danger"
                style={{ width: "20px", height: "20px" }}
              />
              пн-пт, 10:00-19:00
            </p>
            <span
              className="text-secondary fw-bold"
              style={{ fontSize: "14px" }}
            >
              <FiClock
                className="text-danger me-1"
                style={{ width: "20px", height: "20px" }}
              />{" "}
              Режим работы
            </span>
          </div>
        </div>
        <button
          style={{ color: "#333", padding: "12px 10px" }}
          className="w-100 btn fw-bold btn btn-warning rounded-0 d-flex gap-2 align-items-center justify-content-between"
          onClick={() => dispatch({ type: "MODAL", payload: true })}
        >
          <div className="d-flex align-items-center gap-1 justify-content-between">
            {modal ? (
              <IoMdClose className="menu__category" />
            ) : (
              <GiHamburgerMenu
                className="menu__category "
                style={{ color: "#333", padding: "1px 0px" }}
              />
            )}
            Каталог&nbsp; товаров
          </div>
          <MdKeyboardArrowRight
            style={{ width: "20px", height: "20px" }}
            className="text-black"
          />
        </button>
        <div className="d-flex align-items-center gap-1 w-100 border-top border-bottom p-3">
          <Link
            to={"/login"}
            className="p-0 m-0 text-black"
            onClick={() => dispatch({ type: "OPEN", payload: false })}
            style={{ textDecoration: "none" }}
          >
            <CgProfile style={{ width: "35px", height: "35px" }} /> Войти
          </Link>
        </div>
        <ul className="flex-row w-100 mt-2 pb-4 list-group d-flex flex-column justify-content-between p-0 px-3 modal-mobile-list align-items-start gap-3">
          <li className="list-items">
            <a
              href="#li"
              className="modal-link text-black fw-bold"
              onClick={() => dispatch({ type: "OPEN", payload: false })}
            >
              Акции
            </a>
          </li>
          <li className="list-items">
            <a
              href="#li"
              className="modal-link text-black fw-bold"
              onClick={() => dispatch({ type: "OPEN", payload: false })}
            >
              Оплата
            </a>
          </li>
          <li className="list-items">
            <a
              href="#li"
              className="modal-link text-black fw-bold"
              onClick={() => dispatch({ type: "OPEN", payload: false })}
            >
              Установка
            </a>
          </li>
          <li className="list-items">
            <a
              href="#li"
              className="modal-link text-black fw-bold"
              onClick={() => dispatch({ type: "OPEN", payload: false })}
            >
              Bозврат
            </a>
          </li>
          <li className="list-items">
            <a
              href="#li"
              className="modal-link text-black fw-bold"
              onClick={() => dispatch({ type: "OPEN", payload: false })}
            >
              бизнеса
            </a>
          </li>
          <li className="list-items">
            <a
              href="#li"
              className="modal-link text-black fw-bold"
              onClick={() => dispatch({ type: "OPEN", payload: false })}
            >
              Контакты
            </a>
          </li>
          <li className="list-items">
            <a
              href="#li"
              className="modal-link text-black fw-bold"
              onClick={() => dispatch({ type: "OPEN", payload: false })}
            >
              Статус
            </a>
          </li>
          <li className="list-items">
            <a
              href="#li"
              className="modal-link text-black fw-bold"
              onClick={() => dispatch({ type: "OPEN", payload: false })}
            >
              Доставка
            </a>
          </li>
          <li className="list-items">
            <Link
              to="/admin"
              className="modal-link text-black fw-bold"
              onClick={() => dispatch({ type: "OPEN", payload: false })}
            >
              cabinet
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default modal;
