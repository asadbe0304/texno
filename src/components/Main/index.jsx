import React from "react";
import Main from "./../../ui/Slide/index";
import Img2 from "./../../ui/HeroImg";
import Warant from "./../../ui/Warranty";
import Recamendation from "./../../ui/Recomendation";
import Category from "./../../ui/PopularCategory";
import Brand from "./../../ui/Brand/index";
import XitProduct from "./../../ui/XitProduct/index";
import { Outlet, Link } from "react-router-dom";
import Slick from "./../Slick/Slick";
import "./style.scss";
const index = () => {
  return (
    <>
      <section className="main__section">
        <div className="container">
          <div className="mt-5 hero">
            <div className="hero_left">
              <Main />
            </div>
            <div className="d-flex w-50 hero__right align-items-center justify-content-between gap-3">
              <Img2 />
            </div>
          </div>
          <div className="hero__recomendation d-flex flex-column justify-content-center w-100 align-items-center py-4">
            <Recamendation />
          </div>
        </div>
        <div className="site-waranty w-100">
          <div className="container">
            <Warant />
          </div>
        </div>
        <div className="popular-category w-100 ">
          <Category />
        </div>
        <div>
          <Brand />
        </div>
        <div className="px-3">
          <div className="container">
            <XitProduct />
          </div>
        </div>
        <div className="container">
          <div className="d-flex w-75 px-2 py-4 mx-auto justify-content-center align-items-start flex-column gap-1">
            <h3 className="about-title">Интернет-магазин «Империя Техно»</h3>
            <p className="text-secondary my-2 p-0 ">
              Мы работаем с 2012 года и вот уже 10 лет показываем стабильность в
              высоком качестве обслуживания, завоевываем доверие все большего
              количества покупателей со всей России. Главная награда нашей
              команды — клиенты, которые возвращаются снова и рекомендуют нас
              своим друзьям. Как показывают отзывы, 95 % покупателей довольны
              работой «Империи Техно». <br /> <br /> Мы продаём только «белую»
              технику с полным комплектом документов, имеем договоры со всеми
              крупными поставщиками России, не пользуемся услугами наёмных
              водителей и сами проверяем товар на складах, чтобы минимизировать
              процент брака. Каждый сотрудник магазина работает в интересах
              клиента. Мы постоянно расширяем ассортимент товаров и стремимся к
              тому, чтобы предложить вам всё необходимое для дома, дачи, сада и
              отдыха. Если вы искали надёжный магазин с доступными ценами —
              обращайтесь в «Империю Техно». Мы будем рады стать вашим
              проводником в мире приятных покупок.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
