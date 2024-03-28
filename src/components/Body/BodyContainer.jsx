import React, { useState } from "react";
import Content from "./Content";
import MainContent from "./MainContent";

const BodyContainer = () => {
  return (
    <div className="h-screen overflow-hidden ">
      {/* <Content></Content> */}
      <MainContent />
    </div>
  );
};

export default BodyContainer;

//!todo
//1. make the image turn into simple video of them doing live. it will be a video after 2/3 seconds
