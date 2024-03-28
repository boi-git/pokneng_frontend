import React from "react";

const CarouselCard = ({ name, image, socialmedia, onClick }) => {
  return (
    <div
      className="p-4 rounded-2xl border shadow-md cursor-pointer hover:bg-gray-100 bg-white mx-5"
      onClick={onClick}
    >
      <div className="flex items-center">
        <img src={image} className="w-10 h-10 rounded-full" alt={"name"} />
        <div className="ml-4">
          <div className="text-base font-medium">{name}</div>
          <div className="text-sm text-gray-600">{socialmedia}</div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
