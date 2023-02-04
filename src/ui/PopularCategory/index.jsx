import React, { useRef, useState, useEffect, useContext } from "react";
// Import Swiper React components
import Img from "./../../assets/images/2e8f41b9.webp"
import { Swiper, SwiperSlide } from "swiper/react";
import Load from "../Loader/index"
// import { BiHeart } from "react-icons/bi";
// import { context } from "./../../context/context";
// import { AiOutlineShoppingCart } from "react-icons/ai";
import Card from "../Card/Card";
import "./style.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function App() {
  const [data, setData] = useState([]);
  // const [item, setItem] = useState([]);
  // const handleClick = (e) => {
  //   item.push(e);
  //   console.log(item);
  // };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <>
      <div className="container">
        <div className="category-popular-top">
          <h3 className="fw-bold popular-caption">Популярные категории</h3>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          // slidesPerGroup={4}
          loop={false}
          loopFillGroupWithBlank={false}
          pagination={{
            clickable: false,
          }}
          // freeMode={true}
          grabCursor={true}
          navigation={false}
          modules={[Pagination, Navigation]}
          breakpoints={{
            1210: {
              width: 1210,
              slidesPerView: 4,
              // slidesPerGroup: 4
            },
            768: {
              width: 940,
              slidesPerView: 3,
              spaceBetween: 10,
            },
            370: {
              width: 370,
              spaceBetween: 20,
              slidesPerView: 1,
            },
            320: {
              width: 320,
              spaceBetween: 10,
              slidesPerView: 1,
            },
            240: {
              width: 320,
              spaceBetween: 30,
              slidesPerView: 1,
            },
          }}
          className="mySwiper px-4 d-flex justify-content-center py-5 gap-1 align-items-center"
        >
          {data.length > 0
            ? data.map((e) => {
                return (
                  <SwiperSlide key={e.id}>
                    <div  className="card__popular d-flex align-items-center gap-2 flex-column justify-content-between bg-dark p-2">
                      <img
                        src={Img}
                        className="img-card position-absolute "
                        alt="images"
                      />
                      <div className="d-flex justify-content-center px-4 align-items-center w-100 flex-row">
                        <h6 className="fw-bold text-white text-end m-0 my-2">
                        {e.category}
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })
            : <Load/>}
        </Swiper>
      </div>
    </>
  );
}
