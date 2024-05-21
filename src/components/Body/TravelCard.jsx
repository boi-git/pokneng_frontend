import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import MediaQuery from "../utils/MediaQuery";

const TravelCard = ({ location, date, description }) => {
  const { isDesktopOrLaptop, isTablet, isMobile, isPortrait, isRetina } =
    MediaQuery();

  let responsive_class1 = "";
  let responsive_class2 = "";

  if (isDesktopOrLaptop && isTablet) {
    responsive_class1 = "px-6 py-8 flex-grow w-11/12";
    responsive_class2 =
      "flex-shrink-0 w-1/12  flex align-middle justify-center";
  } else {
    responsive_class1 = "px-6 py-8 flex-grow w-3/4";
    responsive_class2 = "flex-shrink-0 w-1/4  flex align-middle justify-center";
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex items-center border border-grey-500 mr-6">
      <div className={responsive_class1}>
        <h1 className="font-bold text-xl">{location}</h1>
        <p className="text-gray-700 text-base mb-4">{date}</p>
        <p className="text-gray-700 text-base max-w-lg">{description}</p>
      </div>
      <div className={responsive_class2}>
        <IoIosArrowForward className="text-gray-500 text-2xl" />
      </div>
    </div>
  );
};

export default TravelCard;
