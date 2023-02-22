import React from "react";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import "./style.scss";
const index = () => {
  return (
    <>
      <a href="tel:+998932502719"className="tel">
        <div className="rounded-5 p-3 position-fixed bottom-0 call bg-warning d-flex justify-content-center align-items-center">
          <BsFillTelephoneForwardFill className="w-100 h-100 call-icon" />
        </div>
      </a>
    </>
  );
};

export default React.memo(index);
