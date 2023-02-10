import "./style.scss";
import Img from "./../../assets/images/car.png";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { BiTrash } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { Form } from "react-bootstrap";
import { CartState } from "./../../context/Auth";

const index = ({ show }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => {
        acc + Number(curr.price) * curr.quantity;
      }, 0)
    );
  }, [cart]);

  console.log(total);
  return (
    <>
      <div className={`layer-cart ${show ? "show" : "hide"}`}>
        <div className="cart d-flex justify-content-start flex-column align-items-start ">
          <div className="cart__head d-flex justify-content-between flex-column align-items-end">
            <div className="d-flex justify-content-between align-items-center w-100">
              <h2 className="cart__title my-2 p-0">
                В корзине {cart.length} товара
              </h2>
            </div>
          </div>
          <div className="cart__body w-100 d-flex  flex-column align-items-start justify-content-start">
            {cart.length > 0 ? (
              cart.map((e) => {
                return (
                  <div
                    key={e.id}
                    className="cart__body--card w-100 gap-2  d-flex justify-content-between align-items-start"
                  >
                    <div className="d-flex justify-content-start gap-2 align-items-start">
                      <img
                        src={e.image}
                        alt="images"
                        className="product__img"
                      />
                      <div className="d-flex  flex-column gap-3 h-100 align-items-start justify-content-between">
                        <div>
                          <h3 className="order__title m-0">{e.name}</h3>
                        </div>
                        <div className="btn btn-white d-flex justify-content-between flex-row align-items-center fw-medium p-1">
                          <BiTrash
                            onClick={() =>
                              dispatch({
                                type: "REMOVE__TO__PRODUCT",
                                payload: e,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column h-100 align-items-start justify-content-between">
                      <span className="fw-bold"> {e.price} $</span>
                      <div className="count d-flex flex-row align-items-start justify-content-between">
                        <button
                          className="btn btn-white m-0 p-0 px-1 fw-bold"
                          onClick={() => {
                            if (e.quantity > 1) {
                              dispatch({
                                type: "ADD__TO__PRODUCT",
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
                        <p className=" border-1 rounded-0 py-1 px-2 m-0 border ">
                          1
                        </p>
                        <button
                          className="btn btn-white fw-bold m-0 p-0 px-1"
                          onClick={() =>
                            dispatch({ type: "ADD__TO__PRODUCT", payload: e })
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <img src={Img} className="w-100" alt="images" />
              </div>
            )}
          </div>
          <div className="cart__footer w-100 p-2 gap-2 d-flex align-items-end flex-column">
            <div className="d-flex justify-content-between align-items-center w-100">
              <h3 className="cart__price">Итого:</h3>
              <p className="p-0 m-0 fw-bold"> {total} $</p>
            </div>
            <div>
              <button className="btn btn-warning" disabled={cart.length === 0}>
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
