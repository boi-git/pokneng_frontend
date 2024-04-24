import React, { useState } from "react";

const News = () => {

  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2">
        <div className="h-full flex items-center justify-center mx-24 flex-col gap-16">
          <div className="font-playfair">
            <h1 className="text-5xl">Experience the luxury of international fashion without leaving your home.</h1>
            <p className="text-lg font-poppins mt-4">
            Shop with us and enjoy the luxury of global fashion without the need to travel. Discover top-tier international trends and styles from the comfort of your home, saving both time and money.
            </p>
          </div>
          <div className="flex justify-around w-full">
          <button 
  className="bg-[#2C5282] hover:bg-blue-700 text-white font-bold py-2 px-6 border-[#2C5282] rounded text-lg font-poppins"

>
  Browse Our Gallery
</button>
          <button className="text-black py-2 px-4 text-lg font-poppins">
            2023 Collection →
          </button>
          </div>
          <div>
            <div className="flex items-center border rounded-xl border-black py-6 px-6">
              <div className="mr-4 text-3xl font-medium">50k</div>
              <div>
                <p className="text-md font-poppins">
                  Shop with us and enjoy the luxury of global fashion without the need to travel. Discover top-tier international trends and styles from the comfort of your home, saving both time and money.
                </p>
              </div>
            </div>
            <div className="ml-auto text-end">
                <button className="text-black py-2 px-4 text-lg font-poppins">
                  Click here to read more →
                </button>
              </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-gray-400"></div>
    </div>
  );
}

export default News;