import React from "react";
import * as StreamerImages from "../../source/image/streamerImage";
import { FaXTwitter, FaTiktok, FaInstagram } from "react-icons/fa6";

const MainContent = () => {
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
        <div className="font-playfair">
          <h1 className="text-3xl">Welcome to My Website</h1>
          <p className="text-lg">
            This is some text written in Playfair Display font.
          </p>
        </div>
      </div>
      <div class="h-full w-full flex items-center justify-center py-10 drop-shadow-xl">
        <div className="mr-4 w-full flex align-center">
          <div className="font-playfair">
            <h1 className="text-3xl">Welcome to My Website</h1>
            <p className="text-lg">
              This is some text written in Playfair Display font.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col align-center">
          <div className="font-playfair flex flex-col justify-center align-center text-justify w-3/4">
            <h1 className="text-3xl text-center">
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
                possible. Join us and elevate your travel game to new heights –
                let's embark on an adventure together!
              </p>
            </div>
          </div>
          <div className="w-full px-10">
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="flex divide-x">
              <FaInstagram size={20}></FaInstagram>
              <FaTiktok size={20}></FaTiktok>
              <FaXTwitter size={20}></FaXTwitter>
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
