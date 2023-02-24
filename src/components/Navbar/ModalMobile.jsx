import React from "react";
import { CartState } from "../../context/Auth";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Skeloton from "../../lib/Skeletono/skeletono"

const ModalMobile = () => {
  const {
    state: { modal, category },
    dispatch,
  } = CartState();
  return (
    <>
      <div
        className={`modal-layer-mobile ${
          modal ? "modal-mobile-block" : "modal-mobile-none"
        } category-modal flex-column d-flex justify-content-start flex-row bg-white w-100`}
      >
        <div className="d-flex p-3 w-100 bg-white justify-content-end align-items-center">
          <IoMdClose
            onClick={() => dispatch({ type: "MODAL", payload: false })}
            className=""
            style={{ width: "25px", height: "25px" }}
          />
        </div>
        <div className="modal-left w-100">
          <ul className="modal-list d-flex flex-column align-items-start  border-0">
            {category.length > 0 ? (
              category.map((e) => {
                return (
                  <li key={e} className="modal-item">
                    <NavLink
                      to="/catproduct"
                      onClick={() =>
                        dispatch({ type: "MODAL", payload: false })
                      }
                      className="text-black text-uppercase text-decoration-none fw-bold d-flex justify-content-start align-items-center gap-2"
                    >
                      {e}
                    </NavLink>
                  </li>
                );
              })
            ) : (
              <Skeloton />
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ModalMobile;
