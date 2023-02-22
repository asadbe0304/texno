import React from "react";
import Address from "./Folder/adress";
import Input from "./Folder/Input";
import Img from "./../../assets/images/im-removebg-preview.png";
import CheckCard from "./Folder/OrderCard";
import Order from "./cardProduct";
import { CartState } from "../../context/Auth";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import "react-toastify/dist/ReactToastify.css";
// import { RiErrorWarningLine } from "react-icons/ri";

const index = () => {
  const {
    state: { cart, checkout, oneCart },
    dispatch,
  } = CartState();

  // const notify = () => toast.succes("Wow Successfully!");
  // console.log(cart);
  // console.log(cart[0].id);

  return (
    <>
      <div className="checkOut mt-4 mb-2">
        <div className="container">
          <div className="chek_out  d-flex justify-content-betweeen align-items-center flex-column">
            <div className="check__out-top w-75 d-flex justify-content-between align-items-center flex-column">
              <div className="d-flex justify-content-between w-100 py-2  align-items-center flex-wrap">
                <h3 className="fw-bold">
                  Оформление заказа 
                     {""} {oneCart.length}
                </h3>
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
              <Order />
              <CheckCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
