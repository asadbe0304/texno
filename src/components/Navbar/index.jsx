import React from "react";
import Form from "react-bootstrap/Form";
import ModalNav from "./NavbarModal";
import data from "./../../db/db.json";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CartState } from "../../context/Auth";
import "./stye.scss";
const index = () => {
  const [search, setValue] = useState("");
  console.log(data);
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchItem) => {
    setValue(searchItem);
  };

  const [modal, setModal] = useState(false);
  const {
    state: { product },
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
                value={search}
                onChange={onChange}
                className={`search-mobile `}
              />
              {/* <BsSearch
                onClick={() => onSearch(search)}
                className="text-white fw-bold"
              /> */}
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
      <div className="dropdown bg-white">
        {data
          .filter((item) => {
            const searchItem = search.toLowerCase();
            const fullName = item.full_name.toLowerCase();

            return (
              searchItem &&
              fullName.startsWith(searchItem) &&
              fullName !== searchItem
            );
          })
          .slice(0, 10)
          .map((item) => (
            <div
              onClick={() => onSearch(item.full_name)}
              className="dropdown-row text-black"
              key={item.full_name}
            >
              {item.full_name}
            </div>
          ))}
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
              <Skeleton />
            )}
          </ul>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default index;
