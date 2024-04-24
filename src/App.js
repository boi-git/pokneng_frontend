import "./App.css";
import BodyContainer from "./components/Body/BodyContainer";
import CarouselCardContainer from "./components/Bottom Nav/CarouselCardContainer ";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

function App() {

  const [selectedIndex, setSelectedIndex] = useState(0); // Initialize selectedIndex with 0

  const handleIndexChange = (index) => {
    setSelectedIndex(index); // Update selectedIndex when index changes
  };


  return (
    <div className="h-lvh w-screen flex flex-col relative overflow-hidden">
      <Navbar onIndexChange={handleIndexChange}/>
      <BodyContainer selectedIndex={selectedIndex} /> 
      <CarouselCardContainer selectedIndex={selectedIndex} onIndexChange={handleIndexChange} />
    </div>
  );
}

export default App;
