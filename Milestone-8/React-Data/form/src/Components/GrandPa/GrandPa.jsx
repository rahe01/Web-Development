import { createContext } from "react";
import Auncle from "../Auncle/Auncle";
import Dad from "../Dad/Dad";

import "./Grand.css";

export const AssetContext = createContext("gold");

const GrandPa = () => {
  return (
    <div className="grand">
      <h1>grand</h1>
      <AssetContext.Provider value="dimond">
        <Dad></Dad>
        <Auncle></Auncle>
      </AssetContext.Provider>
    </div>
  );
};

export default GrandPa;
