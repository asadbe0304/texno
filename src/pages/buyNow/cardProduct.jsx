import React from "react";
import { CartState } from "../../context/Auth";
import { BiPrinter } from "react-icons/bi";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

const orderCard = () => {
  const {
    state: { oneCart },
    dispatch,
  } = CartState();
  // console.log(...oneCart);
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
          {oneCart.length > 0
            ? oneCart.map((e, i) => {
                // <Order prop={e} key={e.id} />;
                <li className="d-flex justify-content-between align-items-center gap-2 w-100">
                  <img
                    src={e.image}
                    style={{ width: "80px", height: "80px" }}
                    alt="images"
                  />
                  <div className="m-0">
                    <h5>{console.log(e.title)}</h5>
                  </div>
                  <div className="count-prod M-0">
                    <h6 className="text-secondary p-0 m-0 fw-normal">
                      Кол-во: 5 шт. {i}
                    </h6>
                  </div>
                  <div className="m-0 p-0">
                    <h6 className="total-price fw-normal">Сумма: 95 575 ₽</h6>
                  </div>
                </li>;
              })
            : " not"}
        </ul>
      </div>
    </>
  );
};

export default orderCard;
