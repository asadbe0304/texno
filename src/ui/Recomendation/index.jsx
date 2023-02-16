import React from "react";
// import Spin from "../../components/Spin/MyLoader";
import SwiperJs from "./swiper";
import "./style.scss";

const index = () => {
  // const [spin, setSpin] = useState(false);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setData(json);
  //       setSpin(true);
  //     })
  //     .catch(setSpin(true))
  //     .finally(setSpin(false));
  // }, []);
  return (
    <>
      {/* <Spin/> */}
      <div className="recomendation d-flex flex-column w-100 justify-content-between align-items-center">
        <div className="recomendation__top py-1 d-flex justify-content-between align-items-center w-100">
          <h3 className="recomendation__title">Наши рекомендации</h3>
          <div className="d-flex justify-content-between align-items-center gap-3">
            {/* <BsArrowLeft  className="swiper-button-next"/>
            <BsArrowRight className="swiper-button-prev"/> */}
          </div>
        </div>
      </div>
      <div className="recomendation__card w-100 ">
        <SwiperJs />
      </div>
    </>
  );
};

export default index;
