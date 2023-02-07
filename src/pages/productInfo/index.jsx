import React from "react";
import { Dropdown } from "react-bootstrap";
import Prod from "./../../ui/XitProduct/index";
import { AiFillStar } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import "./style.scss";
import Load from "./../../ui/Loader";
import Pagination from "../../components/pagination/pagination";
import Brand from "./../../ui/Brand";
import Img from "./../../assets/images/2e8f41b9.webp";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const index = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  // const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setCoinsData(json));
  }, []);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

  // console.log(postsPerPage);
  // console.log(currentPosts);

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
                  <Link  to={"/:pro"} className="underline-none p-0 d-flex justify-content-between align-items-center flex-column">
                  <div
                    key={e}
                    className="product-card d-flex flex-column align-items-center justify-content-center "
                  >
                    <img src={Img} alt="" />
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
                      <span className="fw-small otziv text-black">Арт:283773</span>
                      <span className="text-success fw-bold m-0 p-0 nalichka ">
                        В наличии
                      </span>
                    </div>
                    <h5 className="text-black popular-title w-100">
                      Холодильник ATLANT 4208-000
                    </h5>
                    <div className="product__footer d-flex justify-content-between w-100 align-items-center">
                      <div className="text-uppercase price-title ">213 usd</div>
                      <div className="bg-warning px-1 rounded py-0">
                        <FaShoppingCart />
                      </div>
                    </div>
                  </div>
                  </Link>
                );
              })
            ) : (
              <Load />
            )}
          </div>
          <div className="my-4 d-flex justify-content-center   align-items-center">
            <Pagination
              totalPosts={coinsData.length}
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
