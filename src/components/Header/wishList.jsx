import React from "react";
import { CartState } from "../../context/Auth";
import { BiTrash, BiHeart } from "react-icons/bi";
import { BsSearch, BsCartDashFill, BsCartPlusFill } from "react-icons/bs";
const wishList = () => {
  const {
    state: { cart, like },
    dispatch,
  } = CartState();

  return (
    <>
      {like.length > 0
        ? like.map((e) => {
            return (
              <li
                key={e.id}
                className="d-flex justify-content-start w-100 flex-column align-items-start gap-1"
              >
                <div className="p-1 gap-3 d-flex w-100 justify-content-between align-items-center">
                  <img src={e.image} alt="images" />
                  <div className="w-75">
                    <h5 className="text-dark w-100 text-start like-title">
                      {e.title}
                    </h5>
                    <p className="like-price">{e.price} $</p>
                    <BiTrash
                      className="text-start"
                      style={{ width: "25px", height: "25px" }}
                      onClick={() =>
                        dispatch({
                          type: "REMOVE__TO__LIKE",
                          payload: e,
                        })
                      }
                    />
                    {cart.some((p) => p.id === e.id) ? (
                      <button className="btn btn-outline-danger  border-0 px-2 py-1 rounded-2">
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
                      <button className="btn btn-outline-warning  border-0 px-2 py-1 rounded-2">
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
              </li>
            );
          })
        : "Not like order"}
    </>
  );
};

export default wishList;
