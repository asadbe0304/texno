import React from "react";
import "./style.scss";
import { FiNavigation } from "react-icons/fi";
import { Link } from "react-router-dom";
const modal = ({ open }) => {
  return (
    <>
      <div
        className={`modal-menu bg-light w-100 flex-column d-flex justify-content-start align-items-start ${
          open ? "d-flex" : "d-none"
        }`}
      >
        <div className="modal__top px-3 py-3 bg-black w-100 flex-row d-flex justify-content-between align-items-center gap-1">
          <div className="header__location-mobile text-white gap-2 py-2 d-flex  align-items-start navigation">
            <div className="d-flex justify-content-center fw-normal align-items-center gap-1 fs-6 text-black">
              <FiNavigation className="text-danger navi" />
              <p className="m-0 text-white ">Ваш город</p>
            </div>
            Sankt peterburg
          </div>
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
              Bозврат
            </a>
          </li>
          <li className="list-items">
            <a href="#li" className="modal-link text-black fw-bold">
              бизнеса
            </a>
          </li>
          <li className="list-items">
            <a href="#li" className="modal-link text-black fw-bold">
              Контакты
            </a>
          </li>
          <li className="list-items">
            <a href="#li" className="modal-link text-black fw-bold">
              Статус
            </a>
          </li>
          <li className="list-items">
            <a href="#li" className="modal-link text-black fw-bold">
              Доставка
            </a>
          </li>
          <li className="list-items">
            <Link to="/admin" className="modal-link text-black fw-bold">
              cabinet
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default modal;
