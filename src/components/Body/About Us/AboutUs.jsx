import React, { useState } from "react";
import * as StreamerImages from "../../../source/image/streamerImage";
import { streamer_data } from "../../../source/dummy_data";
import { FaXTwitter, FaTiktok, FaInstagram } from "react-icons/fa6";
import MediaQuery from "../../utils/MediaQuery";
import AboutUsCard from "./AboutUsCard";

const MainContent = () => {
  const { isDesktopOrLaptop, isTablet, isMobile, isPortrait, isRetina } =
    MediaQuery();
  const [activeCard, setActiveCard] = useState(null);
  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  let responsive_class = "";

  let overflow_y = "overflow-y-auto";

  let social_media_name = ["Instgram", "TikTok", "Twitter"];

  if (isDesktopOrLaptop && isTablet) {
    responsive_class =
      "h-full w-full flex items-center justify-center py-10 sm";
    social_media_name = ["Instgram", "TikTok", "Twitter"];
    overflow_y = "overflow-y-auto";
  } else {
    responsive_class =
      "w-full flex flex-col tems-center justify-center py-10 sm";
    social_media_name = ["", "", ""];
    overflow_y = "";
  }
  return (
    <div className="h-full w-screen flex flex-col items-center justify-start overflow-y-auto ">
      <div className={responsive_class}>
        {/* <div className="w-full flex flex-col align-center">

        </div> */}

        <div className="w-full h-full flex align-center justify-center">
          <img
            src={StreamerImages.Streamer1}
            alt="Streamer Circle 10"
            className="h-full w-min  rounded-xl drop-shadow-xl "
          />
        </div>

        <div
          className={`w-full h-full flex flex-col items-center justify-start ${overflow_y}`}
        >
          <div className="font-playfair flex flex-col justify-center align-center text-justify w-5/6">
            <h1 className="text-4xl text-center">
              Travel and Shopping with Pokneng
            </h1>
            <div className="m-10 mb-0">
              <p className="text-lg">
                Are you a jet-setting entrepreneur with a taste for adventure?
                Look no further! Pokneng is your ticket to seamless travel and
                unforgettable shopping experiences.
              </p>
            </div>
          </div>
          <div className="w-full px-10">
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="flex  justify-evenly">
              <div className="flex  items-center justify-center gap-5">
                <FaInstagram size={26}></FaInstagram>
                <p>{social_media_name[0]}</p>
              </div>
              <div className="flex  items-center justify-center gap-5">
                <FaTiktok size={26}></FaTiktok>
                <p>{social_media_name[1]}</p>
              </div>
              <div className="flex  items-center justify-center gap-5">
                <FaXTwitter size={26}></FaXTwitter>
                <p>{social_media_name[2]}</p>
              </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
          <div className="w-full flex justify-center ">
            <div className="flex flex-wrap justify-center">
              {streamer_data.map((streamer_data, index) => (
                <AboutUsCard
                  key={index}
                  name={streamer_data.name}
                  image={streamer_data.image_profile.grid}
                  socialmedia={streamer_data.instagram}
                  isActive={index === activeCard}
                  onClickHandler={() => handleCardClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

//!todo
//1. make the image turn into simple video of them doing live. it will be a video after 2/3 seconds
//2. if user scroll all the way to bottom. and click next card this will scroll back to the top
