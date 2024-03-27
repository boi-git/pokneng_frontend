import React,{useState} from 'react'
import * as StreamerImages from '../source/image/streamerImage';

const Body = () => {
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      <div className="h-screen w-screen flex flex-col items-center justify-start">
        <div className="aspect-w-9 aspect-h-16">
          <img
            src={StreamerImages.Streamer1}
            alt="Streamer Circle 10"
            className="object-cover h-full w-full rounded-xl"
          />
        </div>
        <div className="aspect-w-9 aspect-h-16 ">
          <img
            src={StreamerImages.Streamer1}
            alt="Streamer Circle 10"
            className="object-cover h-full w-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Body