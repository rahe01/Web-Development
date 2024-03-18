import "./App.css";
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from "./Components/NavBar/NavBar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";

import LineChart from "./Components/LineChart/LineChart";

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}

      <PriceOptions></PriceOptions>

      <LineChart></LineChart>
    </>
  );
}

export default App;
