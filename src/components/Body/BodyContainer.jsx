import React, { useState } from "react";
import Content from "./Content";
import MainContent from "./MainContent";
import AboutUs from "./About Us/AboutUs";
import { streamer_data } from "../../source/dummy_data";

const BodyContainer = ({ selectedIndex }) => {
  if (selectedIndex === 0) {
    return <MainContent />;
  } else if (selectedIndex === streamer_data.length - 1) {
    return <AboutUs />;
  } else {
    return <Content selectedIndex={selectedIndex} />;
  }
};

export default BodyContainer;

//!todo
//1. make the image turn into simple video of them doing live. it will be a video after 2/3 seconds
