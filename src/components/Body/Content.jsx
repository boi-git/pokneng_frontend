import React, { useState } from "react";
import * as StreamerImages from "../../source/image/streamerImage";

const Content = () => {
  return (
    <div className="h-full w-screen flex flex-col items-center justify-start overflow-y-auto ">
      <div className="h-full flex items-center justify-center py-10 ">
        <img
          src={StreamerImages.Streamer1}
          alt="Streamer Circle 10"
          className="object-cover h-full w-auto rounded-xl drop-shadow-xl "
        />
      </div>
      <div className="h-full flex items-center justify-center py-10 drop-shadow-xl">
        <img
          src={StreamerImages.Streamer1}
          alt="Streamer Circle 10"
          className="object-cover h-full w-auto rounded-xl "
        />
      </div>
    </div>
  );
};

export default Content;

//!todo
//1. make the image turn into simple video of them doing live. it will be a video after 2/3 seconds
