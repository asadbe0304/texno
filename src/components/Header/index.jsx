import { useState, useEffect, useContext } from "react";
import { FiNavigation, FiShoppingCart } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { BiHeart } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import Tel from "./../../ui/Call";
import Logo from "./../../assets/images/mobile.svg";
import Img from "./../../assets/images/logo.png";
import Form from "react-bootstrap/Form";
import { Badge } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Cart from "../../ui/Cart/index";
import WishList from "./wishList";
import Modal from "./modal";
import { CartState } from "./../../context/Auth";
import "./style.scss";
import data from "./../../db/db.json";

const index = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState("");
  const [favaourite, setFavaourite] = useState(false);
  const [search, setValue] = useState("");
  console.log(data);
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchItem) => {
    setValue(searchItem);
  };
  const {
    state: { cart, like },
  } = CartState();

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = show ? "hidden" : "auto";
  }, [show]);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 120 ? setSticky("sticky") : setSticky("");
    }
  };

  return (
    <>
      <Tel />
      <header className={`w-100 bg-white ${sticky}`}>
        <div className="container">
          <Cart show={show} />
          <div className="header w-100 py-2 d-flex justify-content-between align-items-center">
            <div className="head d-flex justify-content-center align-items-center gap-4">
              <div className="header__logo">
                <Link to="/" className="header__logo--link">
                  <img
                    src={Img}
                    className="header__logo--img"
                    alt="images logo"
                  />
                </Link>
                <Link>
                  <img src={Logo} alt="logo" className="mobile_logo" />
                </Link>
              </div>
              <div className="header__location d-flex flex-column align-items-start navigation">
                <div className="d-flex justify-content-center align-items-center gap-1 fs-6 text-black">
                  <FiNavigation className="text-danger navi" />
                  <p className="m-0">Ваш город</p>
                </div>
                Sankt peterburg
              </div>
            </div>

            <div className="header__search d-flex justify-content-center align-itmes-center">
              {/* search bar */}
              <InputGroup className="mb-0 search-bar">
                <Form.Control
                  placeholder="Search Products"
                  aria-label="Username"
                  value={search}
                  onChange={onChange}
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text
                  id="basic-addon1"
                  className="bg-warning border-0 rounded-0"
                >
                  <BsSearch
                    onClick={() => onSearch(search)}
                    className="text-white fw-bold"
                  />
                </InputGroup.Text>
              </InputGroup>
            </div>
            <div className="dropdown-search">
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
            <InputGroup className=" bg-white mobile__search--bar position-absolute top-0 left-0 right-0 $zindex-modal">
              <Form.Control
                placeholder="Search Products"
                aria-label="Username"
                aria-describedby="basic-addon2"
                value={search}
                onChange={onChange}
              />
              <InputGroup.Text
                id="basic-addon1"
                className="bg-warning border-0 rounded-0"
              >
                <BsSearch className="text-white fw-bold" onClick={() => onSearch(search)}/>
              </InputGroup.Text>
            </InputGroup>

            <div className="header__call">
              <a
                href="tel:+998932502719"
                className="fw-bold header__call--tel text-black"
              >
                +7 (812) 200-49-00
              </a>
              <div className="d-flex flex-column align-items-start justify-content-center">
                <p className="m-0 p-0 text-secondary call__text">
                  +7 (800) 777-04-02
                </p>
                <p className="m-0 p-0 text-secondary call__text">
                  пн-пт, 10:00-19:00
                </p>
              </div>
            </div>
            <div className="header__inner align-items-center d-flex justify-content-between gap-3">
              <div className="header__like--order d-flex justify-content between">
                <div className="admin">
                  <NavLink to="/login" className={"text-black"}>
                    <RiAdminFill className="admin__icon" />
                  </NavLink>
                </div>
                <div className="like position-relative">
                  <BiHeart
                    className="like__icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => setFavaourite((e) => !e)}
                  />
                  <span className="like-badge text-white fw-bold position-absolute bg-danger px-2 py-0 rounded-3">
                    {like.length}
                  </span>

                  {/* drop like menu */}
                  <div
                    className={`drop__like position-absolute bg-white p-2 ${
                      favaourite ? "d-block" : "d-none"
                    }`}
                  >
                    <div className="like-top my-3">
                      <h5>Like order</h5>
                    </div>
                    <ul className="like-list w-100">
                      <WishList />
                    </ul>
                    <div className="like-bottom w-100 mt-0 pt-4 mb-2">
                      <button
                        className="btn btn-danger w-100"
                        disabled={like.length == 0}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                  {/* drop like menu end */}
                </div>
              </div>
              <div className="header__cart position-relative gap-2 d-flex align-items-center justify-content-between">
                <FiShoppingCart
                  onClick={() => setShow((e) => !e)}
                  className="header__shopping--cart pointer"
                />
                <Badge bg="danger" className=" badge">
                  {cart.length}
                </Badge>
                <p className="p-0 mx-2 my-0 order__text">
                  В корзине {cart.length} товаров
                </p>
                <GiHamburgerMenu
                  className="Hambur"
                  onClick={() => setOpen((e) => !e)}
                />
                <IoMdClose
                  className={`position-fixed close-arrow ${
                    show ? "show" : "hide"
                  }`}
                  onClick={() => setShow((e) => !e)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* modal menu */}
        <Modal open={open} />
        <IoMdClose
          className={`position-absolute modal-close ${
            open ? "d-block" : "d-none"
          }`}
          onClick={() => setOpen((e) => !e)}
        />
      </header>
    </>
  );
};

export default index;
