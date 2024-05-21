import React from "react";
import { Travel, Sales, Groupr } from "../../../source/image/streamerImage";

const NewsHeroSection = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-[80vw] rounded-lg overflow-hidden">
        <img src={Travel} className="h-full w-full object-cover" alt="Travel" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg">
          <div className="absolute bottom-0 left-0 m-4">
            <h1 className="text-white text-3xl font-bold">Your Text Here</h1>
            <p className="text-white ">Your Text Here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHeroSection;
