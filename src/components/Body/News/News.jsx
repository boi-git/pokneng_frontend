import React, { useState } from "react";
import { BgNews } from "../../../source/image/streamerImage";

const News = () => {

  return (
<div className="h-1">
  <div className="bg-cove" style={{backgroundImage: `url(${BgNews})`}}>
    <h1 className="text-xl font-bold p-4">Hellow World. Welcome to Pokneng Insider</h1>
  </div>
  <div className="bg-red-40">
    <h1 className="text-xl font-bold p-4">This News About Trip</h1>
  </div>
  <div className="bg-blue-40">
    <h1 className="text-xl font-bold p-4">This is about clearrance</h1>
  </div>
</div>


  );

}

export default News;