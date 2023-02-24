import React from "react";
import "./style.scss";
import { CartState } from "../../context/Auth";
import { useEffect } from "react";
const Loader = () => {
  const {
    state: { loading },
  } = CartState();

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = loading ? "auto" : "hidden";
  }, [loading]);
  return (
    <>
      <div class={`wrappers ${loading ? "d-none" : "d-flex"}`}>
        <span class="dots"></span>
        <span class="dots"></span>
        <span class="dots"></span>
        <span class="dots"></span>
        <span class="dots"></span>
      </div>
    </>
  );
};

export default Loader;
