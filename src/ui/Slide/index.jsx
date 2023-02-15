import Carousel from "react-bootstrap/Carousel";
import Img from "./../../assets/images/6c568bf8.jpeg";
import Img2 from "./../../assets/images/d3a68233.jpeg";
import Img3 from "./../../assets/images/e14aa88e.jpeg";
import Img4 from "./../../assets/images/e932d150.jpeg";
import Img5 from "./../../assets/images/heero.png";
import Img6 from "./../../assets/images/hero-2.jpeg";
import "./style.scss"

function IndividualIntervalsExample() {
  return (
    <Carousel className="rounded-3">
      <Carousel.Item interval={1000} className="rounded-3">
        <img className="d-block w-100 rounded-4  hero__corusel-img" src={Img} alt="First slide" width={626} height={450}/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} className="rounded-3">
        <img className="d-block w-100 rounded-4 hero__corusel-img" src={Img2} alt="Second slide"width={626} height={450}/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} className="rounded-3">
        <img className="d-block w-100 rounded-4 hero__corusel-img " src={Img3} alt="Third slide"width={626} height={450}/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} className="rounded-3">
        <img className="d-block w-100 rounded-4 hero__corusel-img " src={Img4} alt="Third slide"width={626} height={450}/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} className="rounded-3">
        <img className="d-block w-100 rounded-4 hero__corusel-img " src={Img5} alt="Third slide"width={626} height={450}/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} className="rounded-3">
        <img className="d-block w-100 rounded-4 hero__corusel-img " src={Img6} alt="Third slide"width={626} height={450}/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
