import React from "react";
import { useState, useEffect } from "react";
import Card from "./../../ui/Card/Card";
import Brand from "./../../ui/Brand/index";
import XitProduct from "./../../ui/XitProduct";
import { IoMdClose } from "react-icons/io";
import { Dropdown } from "react-bootstrap";
import Load from "./../../ui/Loader/index";
import { NavLink , Link} from "react-router-dom";
import { BiHeart } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiArrowDownCircle } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";
import "./style.scss";
const index = () => {
  return (
    <>
      <div className="container">
        <div className="category-top d-flex justfiy-content-center align-items-start flex-column">
          <div className="d-flex justify-contnet-center align-items-start gap-1 flex-column">
            <div className="mx-3 mt-3 fs-6 text-secondary fw-normal">
              <Dropdown className="drop">
                <Link to="/" className="underline-none text-secondary m-0 p-0">
                Home
                </Link>
                <MdArrowForwardIos className="text-warning mx-1" />
                Крупная бытовая техника
                <Dropdown.Toggle
                  variant="white"
                  id="dropdown-basic"
                  className="text-warning mx-2 toogle"
                ></Dropdown.Toggle>
                <Dropdown.Menu className="drop-menu">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <h3 className="text-black fw-bold fs-4 mx-3 my-4">
              Крупная бытовая техника
            </h3>
          </div>
          <div className="w-100 d-flex justify-content-center align-items-center flex-wrap gap-3">
            <NavLink to={"/info"}>
              <Card />
            </NavLink>
           
            <NavLink to={"/info"}>
              <Card />
            </NavLink>
           
            <NavLink to={"/info"}>
              <Card />
            </NavLink>
           
            <NavLink to={"/info"}>
              <Card />
            </NavLink>
           
            <NavLink to={"/info"}>
              <Card />
            </NavLink>
           
          </div>
          <div className="my-4 w-100">
            <Brand />
          </div>
          <div className="my-4 w-100">
            <XitProduct />
          </div>
          <div className="text-secondary my-4 d-flex justify-content-center align-items-center w-75 mx-auto">
            Крупная бытовая техника создана специально для того, чтобы избавить
            вас от самых трудных и затратных проблем в быту. Трудно представить,
            какой была бы наша жизнь без неё. Поэтому выбирать крупную бытовую
            технику следует с умом, тщательно изучив вопрос. Купить крупную
            бытовую технику можно в любом магазине бытовой техники.
            <br />
            <br />
            Но не везде при этом можно получить высокое качество, надёжность,
            функционал, не говоря уже об экономии.
            <br />
            <br />
            Интернет-магазин «Империя техно» предлагает вам всё это. Вашему
            вниманию представлен широкий ассортимент крупной бытовой техники,
            такой, как холодильники, морозильные камеры, стиральные машины,
            газовые и электрически плиты, и многое другое.
            <br />
            <br />
            Современные технологии и высокое качество сочетаются в продукции
            известнейших мировых брендов, таких, как Bosch, Samsung, Indesit, LG
            и многих других. Вы можете подобрать крупную бытовую технику в
            полном соответствии с вашими желаниями и возможностями – нужных
            габаритов, дизайна, подходящего к вашему интерьеру, с большими
            возможностями.
            <br />
            <br />
            Приобрести крупную бытовую технику в СПБ легко, если обратиться в
            наш интернет-магазин! «Империя техно» не только предоставит вам
            по-настоящему богатый выбор, но и приятные цены. Мы поможем вам
            сделать правильный выбор!
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
