import React from "react";
import { useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import {
  CgProfile,
  CgReorder,
  CgProductHunt,
  CgDetailsMore,
  CgEditStraight,
  CgAdd,
} from "react-icons/cg";
import Brand from "./../ui/Brand";
import {BiLogInCircle} from "react-icons/bi"
import { BsFillBasket2Fill } from "react-icons/bs";
import "./style.scss";
const index = () => {
  const [active, setActive] = useState(true);
  return (
    <>
      <div className="admin-panels">
        <div className="container">
          <div className="bg-white rounded mt-3">
            <Link to={"/"} className="underline-none text-black">
              Главная
            </Link>
            <div className="admin-profile rounded border d-flex justify-content-between align-items-start w-100 my-3 h-100">
              <div className="h-100 admin-left">
                <h2 className="user-profile-title">Здравствуйте, Asadbek</h2>
                <span className="user-id">ID: A81365</span>
                <ul className="profile-list m-0 p-0">
                  <li className="profile-item">
                    <Link
                      to={"/admin"}
                      onClick={() => setActive((e) => !e)}
                      className={`item-link d-flex justify-content-between  ${
                        active ? "text-warning" : "text-black"
                      }`}
                    >
                      Личные данные
                      <CgProfile style={{ width: "20px", height: "20px" }} />
                    </Link>
                  </li>
                  <li className="profile-item">
                    <Link
                      to={"order"}
                      onClick={() => setActive((e) => !e)}
                      className={`item-link d-flex justify-content-between  ${
                        active ? "text-black" : "text-warning"
                      }`}
                    >
                      Заказы
                      <BsFillBasket2Fill
                        style={{ width: "20px", height: "20px" }}
                      />{" "}
                    </Link>
                  </li>
                  <li className="profile-item">
                    <Link
                      to={"addorder"}
                      onClick={() => setActive((e) => !e)}
                      className={`item-link d-flex justify-content-between  ${
                        active ? "text-black" : "text-warning"
                      }`}
                    >
                      Products
                      <CgProductHunt
                        style={{ width: "20px", height: "20px" }}
                      />{" "}
                    </Link>
                  </li>
                  <li className="profile-items fs-6 w-100">
                    <Link
                      to={"addorder"}
                      onClick={() => setActive((e) => !e)}
                      className={`item-links d-flex justify-content-between fw-bold fs-6  ${
                        active ? "" : "text-warning"
                      }`}
                    >
                      Log Out
                      <BiLogInCircle
                        style={{ width: "20px", height: "20px" }}
                      />{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-75 h-100 cabinet-left">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bg-white rounded my-3">
          <Brand />
        </div>
      </div>
    </>
  );
};

export default index;
