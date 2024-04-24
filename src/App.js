import "./App.css";
import BodyContainer from "./components/Body/BodyContainer";
import News from "./components/Body/News/News";
import CarouselCardContainer from "./components/Bottom Nav/CarouselCardContainer ";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIndexChange = (index) => {
    setSelectedIndex(index);
  };

  // Conditional rendering based on selectedIndex
  if (selectedIndex === -1) {
    return (
      <div className="h-lvh w-screen flex flex-col relative overflow-hidden">
        <Navbar onIndexChange={handleIndexChange} />
        <News />
      </div>
    );
  } else {
    return (
      <div className="h-lvh w-screen flex flex-col relative overflow-hidden">
        <Navbar onIndexChange={handleIndexChange} />
        <BodyContainer selectedIndex={selectedIndex} />
        <CarouselCardContainer
          selectedIndex={selectedIndex}
          onIndexChange={handleIndexChange}
        />
      </div>
    );
  }
}

export default App;
