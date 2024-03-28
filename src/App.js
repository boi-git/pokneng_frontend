import "./App.css";
import Body from "./components/Body";
import CarouselCardContainer from "./components/Bottom Nav/CarouselCardContainer ";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-lvh w-screen flex flex-col relative overflow-hidden">
      <Navbar />
      <Body />
      <CarouselCardContainer />
    </div>
  );
}

export default App;
