import React from "react";
import { CartState } from "../../context/Auth";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const btn = () => {
  const {
    state: { modal },
    dispatch,
  } = CartState();
  return (
    <>
      <div className="category__tab w-100">
        <button
          className="rounded-2 btn w-100 fw-bold btn btn-warning rounded-0 d-flex text-black gap-2 align-items-center"
          onClick={() => dispatch({ type: "MODAL", payload: true })}
        >
          {modal ? (
            <IoMdClose className="menu__category" />
          ) : (
            <GiHamburgerMenu className="menu__category" />
          )}
           Каталог&nbsp; товаров
        </button>
      </div>
    </>
  );
};

export default btn;
