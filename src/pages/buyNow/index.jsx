import React from "react";
import Address from "./Folder/adress";
import Input from "./Folder/Input";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { BiPrinter } from "react-icons/bi";
import Img from "./../../assets/images/im-removebg-preview.png"
import CheckCard from "./Folder/OrderCard";
import { RiErrorWarningLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./style.scss";

const index = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <div className="checkOut mt-4 mb-2" ref={componentRef}>
        <div className="container">
          <div className="chek_out  d-flex justify-content-betweeen align-items-center flex-column">
            <div className="check__out-top w-75 d-flex justify-content-between align-items-center flex-column">
              <div className="d-flex justify-content-between w-100 py-2  align-items-center flex-wrap">
                <h3 className="fw-bold">Оформление заказа</h3>
                <div>
                  <Link to="/" className="text-danger">
                    Вернуться в корзину
                  </Link>
                </div>
              </div>
              <div className="bg-white p-3 d-flex w-100 rounded-2 justify-content-between align-items-start gap-1">
                <p className="text-secondary p-0 m-0">
                  Уже покупали у нас? Войдите в свой аккаунт, чтобы отслеживать
                  доставку заказов и сохранять историю покупок
                </p>
                <button className="btn btn-outline-dark py-1 px-4">
                  <Link
                    to={"/login"}
                    className="underline-none text-black p-0 "
                  >
                    Login
                  </Link>
                </button>
              </div>
            </div>
            <Input />
            <Address />
            <div className="prodcut__check-list bg-white w-75 p-4">
              <div className="check-list-top border py-4 px-2 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h5>Состав заказа</h5>
                  <button onClick={handlePrint} className="btn btn-outline-warning text-secondary">
                    Print <BiPrinter />
                  </button>
                </div>
                <ul className="check-list my-4 d-flex jsutify-content-between align-items-start gap-3 flex-column w-100">
                  <li className="d-flex justify-content-between align-items-center gap-2 w-100">
                    <img src={Img} style={{width: "80px", height: "80px"}} alt="images" />
                    <div className="m-0">
                      <h5>Газовая плита GEFEST 3200-06 К62</h5>
                    </div>
                    <div className="count-prod M-0">
                      <h6 className="text-secondary p-0 m-0 fw-normal">
                        Кол-во: 5 шт.
                      </h6>
                    </div>
                    <div className="m-0 p-0">
                      <h6 className="total-price fw-normal">Сумма: 95 575 ₽</h6>
                    </div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center gap-2 w-100">
                    <img src={Img} style={{width: "80px", height: "80px"}} alt="images" />
                    <div className="m-0">
                      <h5>Газовая плита GEFEST 3200-06 К62</h5>
                    </div>
                    <div className="count-prod M-0">
                      <h6 className="text-secondary p-0 m-0 fw-normal">
                        Кол-во: 5 шт.
                      </h6>
                    </div>
                    <div className="m-0 p-0">
                      <h6 className="total-price fw-normal">Сумма: 95 575 ₽</h6>
                    </div>
                  </li>
                </ul>
              </div>
              <CheckCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
