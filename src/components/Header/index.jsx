import { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BiHeart } from "react-icons/bi";
import { motion } from "framer-motion";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";
import Location from "./location";
import Tel from "./../../ui/Call";
import SearchBar from "./search";
import Call from "./Call";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Badge } from "react-bootstrap";
import Cart from "../../ui/Cart/index";
import WishList from "./wishList";
import Modals from "./modal";
import Load from "./../Spin/MyLoader";
import { CartState } from "./../../context/Auth";
import "./style.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const index = () => {
  // const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState("");
  const [favaourite, setFavaourite] = useState(false);

  const {
    state: { cart, like, opencart, searchQuery, product, open },
    dispatch,
  } = CartState();

  // console.log(searchQuery);
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = opencart ? "hidden" : "auto";
  }, [opencart]);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 152 ? setSticky("sticky") : setSticky("");
    }
  };

  let sortedProducts = product;
  if (searchQuery) {
    sortedProducts = sortedProducts.filter((e) =>
      e.title.toLowerCase().includes(searchQuery)
    );
  }
  console.log(searchQuery);
  console.log(sortedProducts);

  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      <Tel />

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Search Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup>
            <Form.Control
              placeholder="Search Products"
              aria-label="Username"
              className="text-lowercase"
              value={searchQuery}
              onFocus={() => dispatch({ type: "SEARCH", payload: true })}
              onChange={(e) => {
                dispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
              aria-describedby="basic-addon1"
            />
  
          </InputGroup>
          <div
            className={`${
              searchQuery.length > 1 ? "d-block" : "d-none"
            } mt-2 py-3 bg-light`}
          >
            {sortedProducts.length > 0 ? (
              sortedProducts.slice(0, 4).map((e) => {
                return (
                  <div
                    key={e.id}
                    className={`d-flex justify-content-between px-4 py-2 align-items-center  w-100 gap-3 my-0 border bg-white `}
                    style={{ width: "400px" }}
                  >
                    <div className="d-flex justify-content-start gap-2 align-items-center">
                      <img
                        src={e.image}
                        alt="images"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <Link
                        to={`/product/${e.id}`}
                        onClick={() => setShow((e) => !e)}
                        className="underline-none text-black"
                      >
                        <div>{e.title}</div>
                      </Link>
                    </div>
                    <div>{e.price} $</div>
                  </div>
                );
              })
            ) : (
              <Load />
            )}
          </div>
        </Modal.Body>
      </Modal>

      <header className={`w-100 bg-white ${sticky}`}>
        <div className="container">
          <Cart />
          <div className="header w-100 py-2 d-flex justify-content-between align-items-center">
            <div className="head d-flex justify-content-center align-items-center gap-4">
              <Location />
            </div>
            <SearchBar />

            <Call />
            <div className="header__inner align-items-center d-flex justify-content-between gap-3">
              <div className="header__like--order d-flex justify-content between">
                <div className="admin">
                  {/* profile sign in component */}
                  <NavLink
                    to="/login"
                    className={
                      "text-black underline-none d-flex flex-column align-items-center justify-content-center"
                    }
                  >
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className="d-flex justify-content-center flex-column align-items-center"
                    >
                      <CgProfile className="admin__icon" />
                      <span className="profile-title">Войти</span>
                    </motion.div>
                  </NavLink>
                  {/* sign in component */}
                </div>
                <div className="like position-relative ">
                  {values.map((v, idx) => (
                    <BsSearch
                      key={idx}
                      className="me-2 mobile-btn-search"
                      onClick={() => handleShow(v)}
                      style={{ width: "18px", height: "18px" }}
                    />
                  ))}
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setFavaourite((e) => !e)}
                    className="d-flex flex-column align-items-center justify-content-center"
                  >
                    <BiHeart
                      className="like__icon"
                      style={{ cursor: "pointer" }}
                    />
                    <p className="profile-title">Избранные</p>
                  </motion.div>
                  <span className="like-badge text-white fw-bold position-absolute bg-danger px-2 py-0 rounded-3">
                    {like.length}
                  </span>
                  {/* drop like menu */}
                  <div
                    className={`drop__like position-absolute bg-light shadow p-2 ${
                      favaourite ? "d-block" : "d-none"
                    }`}
                  >
                    <div className="like-top my-3">
                      <h5>Like order</h5>
                    </div>
                    {/* wishlist */}
                    <ul className="like-list w-100">
                      <WishList />
                    </ul>
                  </div>
                  {/* drop like menu end */}
                </div>
              </div>
              <div className="header__cart position-relative gap-2  d-flex align-items-center justify-content-between">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  onClick={() => dispatch({ type: "SHOW", payload: true })}
                  className="d-flex justify-content-center align-items-center flex-column"
                >
                  <FiShoppingCart className="header__shopping--cart pointer" />
                  <p className="m-0 p-0 profile-title">Корзина</p>
                </motion.div>
                <Badge bg="danger" className="badge rounded-3">
                  {cart.length}
                </Badge>
                <GiHamburgerMenu
                  className="Hambur"
                  onClick={() => dispatch({ type: "OPEN", payload: true })}
                />
              </div>
            </div>
          </div>
        </div>
        {/* modal menu */}
        <Modals />
      </header>
    </>
  );
};

export default index;
