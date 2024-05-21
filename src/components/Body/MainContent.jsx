import React from "react";
import * as StreamerImages from "../../source/image/streamerImage";
import { FaXTwitter, FaTiktok, FaInstagram } from "react-icons/fa6";
import MediaQuery from "../utils/MediaQuery";
import TravelCard from "./TravelCard";
import { Maps } from "../../source/image/streamerImage";

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
            className=" object-cover h-full w-min  rounded-xl drop-shadow-xl "
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
      <div className="h-full w-full pt-10 px-12 font-playfair ">
        <h1 className="text-4xl">Countries Travel</h1>
        <p className="max-w-3xl">
          Nunc in ornare risus. Mauris quis urna a diam tempor facilisis eu quis
          mi. Aliquam et lacus sit amet felis aliquam tempus. Quisque tristique
          a.
        </p>
        <div className="travel-cards-container mt-10">
          <div className="flex flex-col gap-4">
            <TravelCard
              location="San Francisco"
              date="May 21, 2024"
              description="A beautiful city by the bay with a rich cultural heritage and iconic landmarks like the Golden Gate Bridge."
            />
            <TravelCard
              location="San Francisco"
              date="May 21, 2024"
              description="A beautiful city by the bay with a rich cultural heritage and iconic landmarks like the Golden Gate Bridge."
            />
            <TravelCard
              location="San Francisco"
              date="May 21, 2024"
              description="A beautiful city by the bay with a rich cultural heritage and iconic landmarks like the Golden Gate Bridge."
            />
            <TravelCard
              location="San Francisco"
              date="May 21, 2024"
              description="A beautiful city by the bay with a rich cultural heritage and iconic landmarks like the Golden Gate Bridge."
            />
            <TravelCard
              location="San Francisco"
              date="May 21, 2024"
              description="A beautiful city by the bay with a rich cultural heritage and iconic landmarks like the Golden Gate Bridge."
            />
            <TravelCard
              location="San Francisco"
              date="May 21, 2024"
              description="A beautiful city by the bay with a rich cultural heritage and iconic landmarks like the Golden Gate Bridge."
            />
          </div>
        </div>
      </div>
      {/* <div className="h-full w-full py-10 px-12 font-playfair ">
        <h1 className="text-4xl">Get In Touch</h1>
        <p className="max-w-3xl">
          Integer eget tortor id elit eleifend pharetra. In nibh massa, ornare
          nec diam sed, fringilla porttitor mi. Duis eu dictum lacus, non
          blandit tortor. In dictum augue congue lobortis fermentum.
        </p>

        <div className="mx-auto bg-white pt-10 ">
          <div className="shadow-lg rounded-lg overflow-hidden  border border-grey-500 flex flex-row ">
            <div className="w-1/3 bg">
              <div
                className="bg-cover bg-center h-full"
                style={{ backgroundImage: `url(${Maps})` }}
              >
                <h1>Contact Information</h1>
                <div>
                  <p>+06 123 456 789</p>
                  <p>pokneng@gmail.com</p>
                  <p>Bangi, Selangor</p>
                </div>
              </div>
            </div>
            <div className="w-2/3 px-6 py-8  ">
              <form className=" ">
                <div className="flex flex-col ">
                  <label htmlFor="name" className="mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border border-gray-300 p-2 rounded-md"
                    placeholder="John Trangely"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border border-gray-300 p-2 rounded-md"
                    placeholder="hello@nurency.com"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="subject" className="mb-2 font-medium">
                    Your Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="border border-gray-300 p-2 rounded-md"
                    placeholder="I want to hire you quickly"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="border border-gray-300 p-2 rounded-md"
                    rows="5"
                    placeholder="Write here your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-gray-500 text-white p-2 rounded-md mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MainContent;

//!todo
//1. make the image turn into simple video of them doing live. it will be a video after 2/3 seconds
//2. if user scroll all the way to bottom. and click next card this will scroll back to the top
