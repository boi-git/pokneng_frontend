import React from "react";
import { streamer_data } from "../../source/dummy_data";

const Content = ({ selectedIndex }) => {
  // Use the selectedIndex prop to access the corresponding streamer data
  const selectedStreamer = streamer_data[selectedIndex];

  return (
    <div className="h-full w-screen flex flex-col items-center justify-start overflow-y-auto">
      <div className="h-full flex items-center justify-center py-10">
        <img
          src={selectedStreamer.image_profile.vertical}
          alt={`${selectedStreamer.name} Circle`}
          className="object-cover h-full w-auto rounded-xl drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default Content;
//!todo
//1. make the image turn into simple video of them doing live. it will be a video after 2/3 seconds
