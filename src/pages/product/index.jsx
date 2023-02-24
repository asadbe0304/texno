import React from "react";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { FcSettings } from "react-icons/fc";
import { BiHeart } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartState } from "../../context/Auth";
import Garant from "./../../ui/Warranty";
import Recomendation from "./../../ui/XitProduct";
import { API } from "./../../api/axios";
import { FcLike } from "react-icons/fc";
import { useParams } from "react-router-dom";
import { BsCartDashFill, BsCartPlusFill } from "react-icons/bs";
import Img from "../../assets/images/im-removebg-preview.png";
import "./style.scss";
const index = () => {
  const { productId } = useParams();
  const [data, setData] = useState([]);
  const {
    state: { cart, like, product },
    dispatch,
  } = CartState();
  const url = "https://fakestoreapi.com/products/";

  useEffect(() => {
    fetch(url + productId)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [productId]);
  // const {id, price, title, categories, image } = data
  return (
    <>
      <div className="product bg-white">
        <div className="container">
          <div className="product-more">
            <div className="top">
              <Dropdown className="drop-product">
                <Link
                  to={"/"}
                  className="underline-none text-secondary m-0 p-0"
                >
                  Home
                </Link>
                <MdArrowForwardIos className="text-warning mx-1" />
                <Link
                  to={"/catproduct"}
                  className="text-secondary underline-none p-0"
                >
                  Крупная бытовая техника
                </Link>
                <MdArrowForwardIos className="text-warning mx-1" />
                <Link
                  to={"/info"}
                  className="text-secondary underline-none p-0"
                >
                  Холодильники
                </Link>
                <MdArrowForwardIos className="text-warning mx-1" />
                <Link className="text-secondary underline-none p-0">
                  {data.title}
                </Link>
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
              <h2 className="my-3 fw-bold advice-title">{data.title}</h2>
            </div>
            <div className="d-flex justify-content-between my-3 product-item align-items-start">
              <div className="product-left my-4 p-2 gap-4 d-flex justify-content-between align-items-start">
                <Carousel className="product-corusel">
                  <Carousel.Item interval={5000} className="px-4">
                    <img
                      className="hero__corusel-img"
                      src={data.image}
                      alt="First slide"
                      width={300}
                      height={350}
                    />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={5000} className="px-4">
                    <img
                      className="hero__corusel-img"
                      src={data.image}
                      alt="Second slide"
                      width={300}
                      height={350}
                    />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={5000} className="px-4">
                    <img
                      className="hero__corusel-img "
                      src={data.image}
                      alt="Third slide"
                      width={300}
                      height={350}
                    />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={5000} className="px-4">
                    <img
                      className="hero__corusel-img "
                      src={data.image}
                      alt="Third slide"
                      width={300}
                      height={350}
                    />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={5000} className="px-4">
                    <img
                      className="hero__corusel-img "
                      src={data.image}
                      alt="Third slide"
                      width={300}
                      height={350}
                    />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={5000} className="px-4">
                    <img
                      className="hero__corusel-img "
                      src={data.image}
                      alt="Third slide"
                      width={300}
                      height={350}
                    />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
                <div className="d-flex flex-column product-desc">
                  <div className="d-flex">
                    <p className="border px-2 p-1  border-warning">
                      Артикул:{data.id}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-start my-4 gap-2 flex-column">
                    <p className="text-dark fs-6 fw-bold">Отзывы</p>
                    <div className="d-flex w-100 justify-content-between align-items-center gap-1">
                      <div>
                        <AiFillStar className="text-danger" />
                        <AiFillStar className="text-danger" />
                        <AiFillStar className="text-danger" />
                        <AiFillStar className="text-danger" />
                        <AiFillStar className="text-danger" />
                      </div>
                      <div>10 Отзывы</div>
                    </div>
                  </div>
                  <ul className="d-flex flex-column list align-items-start gap-2 ">
                    <li className="fw-bold">Характеристики</li>

                    <li className="text-secondary">
                      Тип загрузки:{" "}
                      <span className="text-black">фронтальная</span>
                    </li>
                    <li className="text-secondary">
                      Максимальная загрузка белья:{" "}
                      <span className="text-black"> 5 кг</span>
                    </li>
                    <li className="text-secondary">
                      Сушка: <span className="text-black ">нет</span>
                    </li>
                    <li className="text-secondary">
                      Дисплей: <span className="text-black ">нет</span>
                    </li>
                    <li className="text-secondary">
                      Выбор скорости отжима:{" "}
                      <span className="text-black "> присутствует</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-right">
                <div className="right-card mb-2 d-flex flex-column justify-content-between">
                  <div className="right-card-top w-100 d-flex gap-2 justify-content-between align-items-start">
                    <h4 className="d-flex justify-content-between flex-column align-items-start gap-1">
                      {data.price} $
                      <span className="text-secondary fw-normal fs-6">
                        Включая НДС 20% (3 080,83 ₽)
                      </span>
                    </h4>

                    {like.some((p) => p.id === data.id) ? (
                      <div
                        className="w-100 d-flex justify-content-end align-items-center"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE__TO__LIKE",
                            payload: data,
                          })
                        }
                      >
                        <FcLike
                          style={{
                            cursor: "pointer",
                            width: "25px",
                            height: "25px",
                          }}
                        />
                      </div>
                    ) : (
                      <div
                        className="w-100  d-flex justify-content-end align-items-center"
                        onClick={() =>
                          dispatch({
                            type: "ADD__TO__LIKE",
                            payload: data,
                          })
                        }
                      >
                        <BiHeart
                          style={{
                            cursor: "pointer",
                            width: "25px",
                            height: "25px",
                          }}
                        />
                      </div>
                    )}
                    {/* <BiHeart className="bi-like" /> */}
                  </div>
                  <div className="d-flex justify-content-between align-items-start my-3 gap-3 flex-column">
                    {cart.some((p) => p.id === data.id) ? (
                      <button
                        className="btn cart-btn btn-danger"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE__TO__PRODUCT",
                            payload: data,
                          })
                        }
                      >
                        Remove to Cart
                      </button>
                    ) : (
                      <button
                        className="btn cart-btn btn-warning"
                        onClick={() =>
                          dispatch({
                            type: "ADD__TO__PRODUCT",
                            payload: data,
                          })
                        }
                      >
                        Add to Cart
                      </button>
                    )}
                    <Link
                      to="/check"
                      onClick={() =>
                        dispatch({
                          type: "ADD__TO__PRODUCT",
                          payload: data,
                        })
                      }
                      className="btn cart-btn btn-outline-warning"
                    >
                      Buy one click
                    </Link>
                  </div>
                </div>
                <div className="right-bottom w-100 border">
                  <div className="p-0 m-0 d-flex justify-content-between align-items-start gap-1 flex-column">
                    <h6>Дополнительные услуги</h6>
                    <p className="text-secondary m-0 p-0">
                      <FcSettings className="mx-2 text-danger" />
                      Утилизация старой техники
                    </p>
                    <p className="text-secondary m-0 p-0">
                      <FcSettings className="mx-2 text-danger" />
                      Утилизация старой техники
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="product-advice px-3">
              <h4 className="my-4">{data.title}</h4>
              <div className="d-flex justify-content-between w-100 gap-1 px-3 align-items-start">
                <ul className="d-flex flex-column align-items-start list">
                  <li className="d-flex justify-content-between align-items-start w-100">
                    <div>Тип загрузки:</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-start w-100">
                    <div>Максимальная загрузка белья:</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-start w-100">
                    <div>Резервуар для воды:</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-start w-100">
                    <div>Инверторный двигатель:</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-start w-100">
                    <div>Высота:</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-start w-100">
                    <div>Глубина:</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-start w-100">
                    <div>Ширина:</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-start w-100">
                    <div>Защита:</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-start w-100">
                    <div>Программы:</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-start w-100">
                    <div>Количество программ стирки:</div>
                  </li>
                </ul>
                <ul className="d-flex list flex-column align-items-start">
                  <li>фронтальная</li>
                  <li>5 kg</li>
                  <li>net</li>
                  <li>нет</li>
                  <li>85.6</li>
                  <li>36.5</li>
                  <li>60 cm</li>
                  <li>от протечек, от детей</li>
                  <li>хлопок эко 60°C, постельное белье, ручная/шерсть</li>
                  <li>15</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-garant my-2 p-1">
          <div className="container">
            <Garant />
          </div>
        </div>
        <div className="container">
          <Recomendation />
        </div>
      </div>
    </>
  );
};

export default index;
