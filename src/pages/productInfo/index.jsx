import React from "react";
import { Dropdown } from "react-bootstrap";
import Prod from "./../../ui/XitProduct/index";
import { AiFillStar } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { BsCartDashFill, BsCartPlusFill } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import "./style.scss";
import { FcLike } from "react-icons/fc";
import Load from "./../../ui/Loader";
import { CartState } from "../../context/Auth";
import Pagination from "../../components/pagination/pagination";
import Brand from "./../../ui/Brand";
import Img from "./../../assets/images/2e8f41b9.webp";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const {
    state: { product, cart, like },
    dispatch,
  } = CartState();

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => setCoinsData(json));
  // }, []);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = product.slice(firstPostIndex, lastPostIndex);
  // const currentPosts = product
  console.log(currentPosts);
  return (
    <>
      <div className="container">
        <div className="product-info d-flex flex-column align-itmes-start justify-content-between">
          <div className="info-top my-3 text-secondaryflex-wrap  w-100">
            <Dropdown className="drop">
              <Link to={"/"} className="underline-none text-secondary m-0 p-0">
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
              Холодильники
              <Dropdown.Toggle
                variant="white"
                id="dropdown-basic"
                className="text-warning mx-2 toogle"
              ></Dropdown.Toggle>
              <Dropdown.Menu className="drop-menu">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="text-secondary text-end">1054 товара</div>
          </div>
          <div className="product-all">
            {currentPosts.length > 0 ? (
              currentPosts.map((e) => {
                return (
                  <div
                    key={e.id}
                    className="product-card d-flex flex-column position-relative align-items-center justify-content-center "
                  >
                    {like.some((p) => p.id === e.id) ? (
                      <div
                        className="position-absolute wish"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE__TO__LIKE",
                            payload: e,
                          })
                        }
                      >
                        <FcLike className="like-heart" />
                      </div>
                    ) : (
                      <div
                        className="position-absolute wish"
                        onClick={() =>
                          dispatch({
                            type: "ADD__TO__LIKE",
                            payload: e,
                          })
                        }
                      >
                        <BiHeart className="like-heart" />
                      </div>
                    )}
                    <img src={e.image} alt={e.name} />
                    <div className="w-100 d-flex align-items-center justify-content-between my-3">
                      <div className="d-flex justfiy-content-between align-items-center gap-1">
                        <AiFillStar className="star-rate text-danger" />
                        <AiFillStar className="star-rate text-danger" />
                        <AiFillStar className="star-rate text-danger" />
                        <AiFillStar className="star-rate text-danger" />
                        <AiFillStar className="star-rate text-danger" />
                      </div>
                      <a
                        href="#link"
                        className="underline-none p-0 text-secondary otziv"
                      >
                        729 otziv
                      </a>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <span className="fw-small otziv text-black">
                        Арт:283773
                      </span>
                      <span className="text-success fw-bold m-0 p-0 nalichka ">
                        В наличии
                      </span>
                    </div>
                    <Link
                      to={"/:pro"}
                      className="underline-none p-0 d-flex justify-content-start align-items-start w-100 mt-2"
                    >
                      <h5 className="text-black popular-title  w-100">
                        {e.name}
                      </h5>
                    </Link>
                    <div className="product__footer d-flex justify-content-between w-100 align-items-center">
                      <div className="text-uppercase price-title postion-relative ">
                        {e.price} $
                      </div>
                      {cart.some((p) => p.id === e.id) ? (
                        <button className="bg-danger  border-0 px-2 py-1 rounded-2">
                          <BsCartDashFill
                            className="shop-cart"
                            type="button"
                            onClick={() =>
                              dispatch({
                                type: "REMOVE__TO__PRODUCT",
                                payload: e,
                              })
                            }
                          />
                        </button>
                      ) : (
                        <button className="bg-warning  border-0 px-2 py-1 rounded-2">
                          <BsCartPlusFill
                            className="shop-cart"
                            type="button"
                            onClick={() =>
                              dispatch({
                                type: "ADD__TO__PRODUCT",
                                payload: e,
                              })
                            }
                          />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <Load />
            )}
          </div>
          <div className="my-4 d-flex justify-content-center   align-items-center">
            <Pagination
              totalPosts={product.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
          <div className="my-4">
            <Brand />
          </div>
          <div className="my-4">
            <Prod />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
