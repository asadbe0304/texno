import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="w-100">
        <h2> Responsive </h2>
        <div className="d-flex justify-content-between align-items-center" style={{width: "1440px", height:"200px"}}>

        <Slider {...settings} className="w-100 d-flex" style={{overflowX:"hidden"}}>
          <div className="w-25 h-25">
            <h3>1</h3>
          </div>
          <div className="w-25 h-25">
            <h3>2</h3>
          </div>
          <div className="w-25 h-25">
            <h3>3</h3>
          </div>
          <div className="w-25 h-25">
            <h3>4</h3>
          </div>
          <div className="w-25 h-25">
            <h3>5</h3>
          </div>
          <div className="w-25 h-25">
            <h3>6</h3>
          </div>
          <div className="w-25 h-25">
            <h3>7</h3>
          </div>
          <div className="w-25 h-25">
            <h3>8</h3>
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}
