import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useRef } from "react";
import NewsHeroSection from "./NewsHeroSection";

const News = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="h-full w-screen overflow-y-scroll overflow-hidden mx-6">
      <div className="h-full my-4 ">
        <Slider {...settings}>
          <NewsHeroSection />
          <NewsHeroSection />
          <NewsHeroSection />
        </Slider>
      </div>
      <div>
        <h1>Travels</h1>
      </div>
      <div>
        <h1>Travels</h1>
      </div>
      <div>
        <h1>Travels</h1>
      </div>
    </div>
  );
};

export default News;
