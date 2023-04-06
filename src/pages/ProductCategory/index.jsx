import React from "react";
import Card from "./../../ui/Card/Card";
import Brand from "./../../ui/Brand/index";
import XitProduct from "./../../ui/XitProduct";
import Dropdown from "./dropdown";
import Load from "../../ui/Loader/index";
import { CartState } from "../../context/Auth";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.scss";
const index = () => {
  const {
    state: { product },
  } = CartState();

  return (
    <>
      <div className="bg-white pt-4">
        <div className="container">
          <div className="category-top d-flex justfiy-content-center align-items-start flex-column">
            <div className="d-flex justify-contnet-center align-items-start gap-1 flex-column">
              <div className="text-secondary fw-normal"></div>
              <Dropdown />
              <h3 className="text-black fw-bold fs-4 mx-0 mt-5 mb-4">
                Крупная бытовая техника
              </h3>
            </div>
            <div className="w-100 d-flex gap-3 justify-content-center align-items-center flex-wrap">
              {product.length > 0 ? (
                product.map((e) => {
                  return (
                   <NavLink  to="/info">
                    <Card key={e.id} prop={e}/>
                   </NavLink>
                  );
                })
              ) : (
                <Load />
              )}
            </div>
            <div className="my-4 py-2 w-100">
              <Brand />
            </div>
            <div className="my-4 w-100">
              <XitProduct />
            </div>
            <div className="text-secondary my-4 d-flex justify-content-center align-items-center w-75 mx-auto">
              Крупная бытовая техника создана специально для того, чтобы
              избавить вас от самых трудных и затратных проблем в быту. Трудно
              представить, какой была бы наша жизнь без неё. Поэтому выбирать
              крупную бытовую технику следует с умом, тщательно изучив вопрос.
              Купить крупную бытовую технику можно в любом магазине бытовой
              техники.
              <br />
              <br />
              Но не везде при этом можно получить высокое качество, надёжность,
              функционал, не говоря уже об экономии.
              <br />
              <br />
              Интернет-магазин «Империя техно» предлагает вам всё это. Вашему
              вниманию представлен широкий ассортимент крупной бытовой техники,
              такой, как холодильники, морозильные камеры, стиральные машины,
              газовые и электрически плиты, и многое другое.
              <br />
              <br />
              Современные технологии и высокое качество сочетаются в продукции
              известнейших мировых брендов, таких, как Bosch, Samsung, Indesit,
              LG и многих других. Вы можете подобрать крупную бытовую технику в
              полном соответствии с вашими желаниями и возможностями – нужных
              габаритов, дизайна, подходящего к вашему интерьеру, с большими
              возможностями.
              <br />
              <br />
              Приобрести крупную бытовую технику в СПБ легко, если обратиться в
              наш интернет-магазин! «Империя техно» не только предоставит вам
              по-настоящему богатый выбор, но и приятные цены. Мы поможем вам
              сделать правильный выбор!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
