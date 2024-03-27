import React,{useState} from 'react'
import * as StreamerImages from '../source/image/streamerImage';

const Body = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="aspect-w-9 aspect-h-16">
        <img
          src={StreamerImages.Streamer1}
          alt="Streamer Circle 10"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default Body