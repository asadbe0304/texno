import React from "react";
import { BsCreditCard2Back, BsCalendarCheck } from "react-icons/bs";
import { RiTakeawayLine } from "react-icons/ri";
import { AiOutlineFileProtect } from "react-icons/ai";
import "./style.scss"
import Img from "./../../assets/images/Calendar.svg"
import Img2 from "./../../assets/images/Cost.svg"
import Img3 from "./../../assets/images/warran.svg"
import Img5 from "./../../assets/images/Delivery.svg"
import Img4 from "./../../assets/images/yandex.svg"
import { FaYandex } from "react-icons/fa";
const index = () => {
  return (
    <>
      <div className="mb-3 warranty w-100 d-flex justify-content-between align-items-center gap-3">
        <div className="warrant d-flex justify-content-between flex-column aligm-items-start gap-2">
          {/* <BsCreditCard2Back className="warant-icon" /> */}
          <img src={Img} className="warant-icon" alt="icon" />
          <p className=" p-0">
            Самые низкие цены и оплата после получения
          </p>
        </div>
        <div className="warrant d-flex justify-content-between flex-column aligm-items-start gap-2">
          {/* <RiTakeawayLine className="warant-icon"/>\ */}
          <img src={Img5} className="warant-icon" alt="icon" />       
          <p>Доставка на следующий день в Москве и Санкт-Петербурге</p>
        </div>
        <div className="warrant d-flex justify-content-between flex-column aligm-items-start gap-2">
          {/* <BsCalendarCheck className="warant-icon"/> */}
          <img src={Img} className="warant-icon" alt="icon" />
          <p>30 дней на проверку и возврат товара</p>
        </div>
        <div className="warrant d-flex justify-content-between flex-column aligm-items-start gap-2 ">
          {/* <AiOutlineFileProtect className="warant-icon" /> */}
          <img src={Img3} className="warant-icon" alt="icon" />
          <p>Официальная гарантия от производителя</p>
        </div>
        <div className="warrant d-flex justify-content-between flex-column aligm-items-start gap-2">
        <img src={Img4} className="warant-icon" alt="icon" />
          {/* <FaYandex className="warant-icon"/> */}
          <p>10 лет размещаем товары на Яндекс.Маркете</p>
        </div>
      </div>
    </>
  );
};

export default index;
