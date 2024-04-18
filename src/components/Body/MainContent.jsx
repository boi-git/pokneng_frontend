import React from "react";
import * as StreamerImages from "../../source/image/streamerImage";
import { FaXTwitter, FaTiktok, FaInstagram } from "react-icons/fa6";
import MediaQuery from "../utils/MediaQuery";

const MainContent = () => {
  const { isDesktopOrLaptop, isTablet, isMobile, isPortrait, isRetina } =
    MediaQuery();

  let responsive_class = "";

  if (isDesktopOrLaptop && isTablet) {
    responsive_class =
      "h-full w-full flex items-center justify-center py-10 sm";
  } else {
    responsive_class =
      "w-full flex flex-col tems-center justify-center py-10 sm";
  }
  return (
    <div className="h-full w-screen flex flex-col items-center justify-start overflow-y-auto ">
      <div className="h-full flex items-center justify-center py-10 ">
        <img
          src={StreamerImages.Streamer1}
          alt="Streamer Circle 10"
          className="object-cover h-full w-auto rounded-xl drop-shadow-xl "
        />
      </div>
      <div className="h-full flex items-center justify-center py-10 ">
        <div className="font-playfair">
          <h1 className="text-4xl">Welcome to My Website</h1>
          <p className="text-lg">
            This is some text written in Playfair Display font.
          </p>
        </div>
      </div>

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

        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="font-playfair flex flex-col justify-center align-center text-justify w-5/6">
            <h1 className="text-4xl text-center">
              Travel and Shopping with Pokneng
            </h1>
            <div className="m-10">
              <p className="text-lg">
                Are you a jet-setting entrepreneur with a taste for adventure?
                Look no further! Pokneng is your ticket to seamless travel and
                unforgettable shopping experiences.
              </p>
              <br></br>
              <p className="text-lg">
                Say goodbye to ordinary trips and hello to a world where
                business and pleasure collide in the most exhilarating way
                possible. Join us and elevate your travel game to new heights -
                let's embark on an adventure together!
              </p>
            </div>
          </div>
          <div className="w-full px-10">
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="flex  justify-evenly">
              <div className="flex  items-center justify-center gap-5">
                <FaInstagram size={26}></FaInstagram>
                <p>Instagram</p>
              </div>
              <div className="flex  items-center justify-center gap-5">
                <FaTiktok size={26}></FaTiktok>
                <p>TikTok</p>
              </div>
              <div className="flex  items-center justify-center gap-5">
                <FaXTwitter size={26}></FaXTwitter>
                <p>Twitter</p>
              </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
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
