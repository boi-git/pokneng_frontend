import CarouselCard from "./CarouselCard ";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { streamer_data } from "../../source/dummy_data";
import MediaQuery from "../utils/MediaQuery";
import React, { useState , useRef } from "react";

const HorizontalCard = ({ selectedIndex,onIndexChange }) => {
  const { isDesktopOrLaptop, isTablet, isMobile, isPortrait, isRetina } =
    MediaQuery();
  const sliderRef = useRef(null);
    
  const [selected_Index, setSelectedIndex] = useState(0);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    centerMode: true,
    slidesToScroll: 3,
  };

  if (isDesktopOrLaptop && isTablet) {
    settings.slidesToShow = 3;
  } else {
    settings.slidesToShow = 1;
  }

  const handleIndexChange = (index) => {
    setSelectedIndex(index);
    onIndexChange(index); // Call the function passed from the parent component
  };

  if(selected_Index !== selectedIndex ){
    sliderRef.current.slickGoTo(selectedIndex);
  }

  return (
    <div className="sticky bottom-0 left-0 w-full bg-transparent  flex align-center h-36 max-[124px] max-autp px-4 overflow-hidden">
      <div className="min-h-0 min-w-0 bg-transparent">
        <Slider ref={sliderRef} {...settings} afterChange={handleIndexChange}>
          {streamer_data.map((streamer_data, index) => (
            <CarouselCard
              key={index}
              name={streamer_data.name}
              image={streamer_data.image_profile.circle}
              socialmedia={streamer_data.instagram}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HorizontalCard;
