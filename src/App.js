import "./App.css";
import BodyContainer from "./components/Body/BodyContainer";
import CarouselCardContainer from "./components/Bottom Nav/CarouselCardContainer ";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-lvh w-screen flex flex-col relative overflow-hidden">
      <Navbar />
      <BodyContainer />
      <CarouselCardContainer />
    </div>
  );
}

export default App;
