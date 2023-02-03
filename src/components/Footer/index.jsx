import React from "react";
import "./style.scss";
import { IoMdNavigate } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoMdCalendar } from "react-icons/io";
import Img from "./../../assets/images/Screenshot_79-removebg-preview.png";
const index = () => {
  return (
    <>
      <footer className="w-100 py-3">
        <div className="container">
          <div className="footer py-3">
            <ul className="footer-list flex-column my-2 justify-content-between align-items-start footer-list-3">
              <li className="footer__list--item">
                <a href="#li" className="footer__link">
                  О магазине
                </a>
              </li>
              <li className="footer__list--item">
                <a href="#li" className="footer__link">
                  Установка
                </a>
              </li>
              <li className="footer__list--item">
                <a href="#li" className="footer__link">
                  Обмен и возврат
                </a>
              </li>
              <li className="footer__list--item text-white">
                <IoMdNavigate className="text-danger fw-bold me-1" />
                Ваш город <br />
                <span className="fw-small">Санкт-Петербург и область</span>
              </li>
            </ul>
            <ul className="d-flex justify-content-between w-75 py-2 align-items-start gap-5 footer__list--inner">
              <li className="text-white fw-bolder footer-item">
                О компании
                <ul className="footer-list flex-column my-2 justify-content-between align-items-start">
                  <li className="footer__list--item">
                    <a href="#li" className="footer__link">
                      О магазине
                    </a>
                  </li>
                  <li className="footer__list--item">
                    <a href="#li" className="footer__link">
                      Установка
                    </a>
                  </li>
                  <li className="footer__list--item">
                    <a href="#li" className="footer__link">
                      Обмен и возврат
                    </a>
                  </li>
                </ul>
              </li>
              <li className="fw-bolder text-white footer-item">
                О компании
                <ul className="footer-list flex-column my-2 justify-content-between align-items-start">
                  <li className="footer__list--item">
                    <a href="#li" className="footer__link">
                      О магазине
                    </a>
                  </li>
                  <li className="footer__list--item">
                    <a href="#li" className="footer__link">
                      Установка
                    </a>
                  </li>
                  <li className="footer__list--item">
                    <a href="#li" className="footer__link">
                      Обмен и возврат
                    </a>
                  </li>
                </ul>
              </li>
              <li className="text-white fw-bolder footer-item">
                Call Centre
                <ul className="footer-list flex-column my-2 justify-content-between align-items-start">
                  <li className="footer__list--item">
                    <a href="tel:+8659895" className="footer__link fw-normal">
                      <IoMdCall className="footer-icon" />
                      +7 (405) 285 8855
                    </a>
                  </li>
                  <li className="footer__list--item">
                    <a href="#li" className="footer__link fw-normal">
                      <IoMdMail className="footer-icon" />
                      example@gmail.com
                    </a>
                  </li>
                  <li className="footer__list--item">
                    <p href="#li" className="footer__link fw-normal">
                      <IoMdCalendar className="footer-icon" />
                      Пн-Пт, 10:00-19:00
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;
