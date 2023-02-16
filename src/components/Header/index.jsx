import { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BiHeart } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Location from "./location";
import Tel from "./../../ui/Call";
import SearchBar from "./search";
import Call from "./Call";
import { Badge } from "react-bootstrap";
import Cart from "../../ui/Cart/index";
import WishList from "./wishList";
import Modal from "./modal";
import { CartState } from "./../../context/Auth";
import "./style.scss";

const index = () => {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState("");
  const [favaourite, setFavaourite] = useState(false);

  const {
    state: { cart, like, opencart, searchQuery },
    dispatch,
  } = CartState();

  console.log(searchQuery);
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

  return (
    <>
      <Tel />
      <header className={`w-100 bg-white ${sticky}`}>
        <div className="container">
          <Cart />
          <div className="header w-100 py-2 d-flex justify-content-between align-items-center">
            <div className="head d-flex justify-content-center align-items-center gap-4">
              <Location />
            </div>
            <SearchBar />
            {/* <InputGroup className=" bg-white mobile__search--bar position-absolute top-0 left-0 right-0">
              <Form.Control
                placeholder="Search Products"
                aria-label="Username"
                aria-describedby="basic-addon2"
                value={searchQuery}
                onFocus={() => dispatch({ type: "SEARCH", payload: true })}
                onChange={(e) => {
                  dispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value,
                  });
                }}
                // value={search}
                // onChange={onChange}
              />
              <InputGroup.Text
                id="basic-addon1"
                className="bg-warning border-0 rounded-0"
              >
                <BsSearch
                  className="text-white fw-bold"
                  // onClick={() => onSearch(search)}
                />
              </InputGroup.Text>
            </InputGroup> */}
            <Call />
            <div className="header__inner align-items-center d-flex justify-content-between gap-3">
              <div className="header__like--order d-flex justify-content between">
                <div className="admin">
                  <NavLink to="/login" className={"text-black underline-none d-flex flex-column align-items-center justify-content-center"}>
                    <CgProfile className="admin__icon" />
                    <span className="profile-title">Profile</span>
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
                  onClick={() => dispatch({ type: "SHOW", payload: true })}
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
