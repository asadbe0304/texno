import React from "react";
import { CgProfile } from "react-icons/cg";
import "./style.scss"
const cabinet = () => {
  return (
    <>
      <h2 className="cabinet-title">Личные данные</h2>
      <div className="cabinet-card d-flex justify-content-between align-items-start flex-column">
        <span className="avatar-text">Avatar</span>
        <CgProfile style={{ width: "80px", height: "80px" }} />
        <div className="cabinet-card-body d-flex justify-content-start gap-3 align-items-center">
          <div>
            <span className="card-name-span text-secondary fw-bold">Имя</span>
            <h5 className="card-name-title border rounded-2 p-2 w-100 text-secondary">
              Asadbek
            </h5>
          </div>
          <div>
            <span className="card-name-span text-secondary fw-bold">
              Телефон
            </span>
            <h5 className="card-name-title border rounded-2 p-2 w-100 text-secondary">
              +998932502719
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default cabinet;
