import React from "react";
import { CartState } from "../../context/Auth";
import { BiPrinter, BiTrash } from "react-icons/bi";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

const orderCard = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  // console.log(oneCart);
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <div className="check-list-top border py-4 px-2 my-3">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Состав заказа</h5>
          <button
            onClick={handlePrint}
            className="btn btn-outline-warning text-secondary"
          >
            Print <BiPrinter />
          </button>
        </div>
        <ul
          ref={componentRef}
          className="check-list my-4 d-flex jsutify-content-between align-items-start gap-3 flex-column w-100"
        >
          {cart.length > 0
            ? cart.map((e) => {
                // <Order prop={e} key={e.id} />;
                return (
                  <li
                    key={e.id}
                    className="d-flex justify-content-between border-bottom align-items-start gap-2 w-100"
                  >
                    <img
                      src={e.image}
                      style={{ width: "80px", height: "80px" }}
                      alt="images"
                    />
                    <div className="m-0 d-flex flex-column align-items-start gap-2">
                      <h5>{e.title}</h5>
                      <div className="d-flex justify-content-between align-items-center w-100">
                        <BiTrash
                          onClick={() =>
                            dispatch({
                              type: "REMOVE__TO__PRODUCT",
                              payload: e,
                            })
                          }
                          style={{width: "25px", height: "25px"}}
                        />
                    <div className="d-flex py-0 rounded m-0 align-items-center">
                      <button
                        className="btn btn-outline-dark text-danger w-100 rounded-start rounded-0 fw-bold"
                        onClick={() => {
                          if (e.quantity > 1) {
                            dispatch({
                              type: "DECREASE",
                              payload: e,
                            });
                          } else {
                            dispatch({
                              type: "REMOVE__TO__PRODUCT",
                              payload: e,
                            });
                          }
                        }}
                      >
                        -
                      </button>
                      <p className="rounded-0 m-0 mx-2">
                        {e.quantity}
                      </p>
                      <button
                        className="btn m-0  btn-outline-dark rounded-end rounded-0  text-danger fw-bold"
                        onClick={() =>
                          dispatch({ type: "INCREASE", payload: e })
                        }
                      >
                        +
                      </button>
                    </div>
                      </div>
                    </div>

                    <div className="count-prod M-0">
                      <h6 className="text-secondary p-0 m-0 fw-normal">
                        Кол-во: {e.quantity} шт.
                      </h6>
                    </div>
                    <div className="m-0 p-0">
                      <h6 className="total-price fw-normal">
                        Сумма: {e.price}$
                      </h6>
                    </div>
                  </li>
                );
              })
            : " Not Order "}
        </ul>
      </div>
    </>
  );
};

export default orderCard;
