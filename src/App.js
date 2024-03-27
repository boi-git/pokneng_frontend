import './App.css';
import Body from './components/Body';
import HorizontalCard from './components/HorizontalCard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="h-lvh w-screen flex flex-col relative">
      <Navbar />
      <Body />
      <HorizontalCard />
    </div>
  );
}

export default App;
