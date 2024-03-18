import "./App.css";
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from "./Components/NavBar/NavBar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";

import LineChart from "./Components/LineChart/LineChart";
import Phones from "./Components/Phones/Phones";

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}

      <PriceOptions></PriceOptions>

      <LineChart></LineChart>


      <Phones></Phones>
    </>
  );
}

export default App;
