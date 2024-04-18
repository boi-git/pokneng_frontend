import React, { useState } from "react";
import { FaXTwitter, FaTiktok, FaInstagram } from "react-icons/fa6";

const AboutUsCard = ({
  name,
  image,
  socialmedia,
  onClick,
  isActive,
  onClickHandler,
}) => {
  return (
    <div className="w-max h-max bg-white p-4 m-1 rounded-lg">
      <div
        className={`relative w-48 h-48 overflow-hidden rounded-lg cursor-pointer transition-all transform ${
          isActive ? "scale-105 translate-x-2" : "scale-100 translate-x-0"
        }`}
        onClick={onClickHandler}
      >
        {isActive && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0)]"></div>
            <div className="absolute inset-0 flex items-end justify-center p-1">
              <span className="text-white text-lg">{name}</span>
            </div>
          </>
        )}
        <img
          src={image}
          className="w-full h-full object-cover rounded-lg shadow-lg"
          alt={name}
        />
      </div>

      {isActive && (
        <div className="flex justify-evenly mt-4">
          <div className="flex items-center justify-center gap-5">
            <FaInstagram size={18}></FaInstagram>
          </div>
          <div className="flex items-center justify-center gap-5">
            <FaTiktok size={18}></FaTiktok>
          </div>
          <div className="flex items-center justify-center gap-5">
            <FaXTwitter size={18}></FaXTwitter>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUsCard;
