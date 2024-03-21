import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";


const Me = () => {
    const gift  = useContext(AssetContext)
    return (
        <div>
            <h1>me</h1>
            <h1>{gift}</h1>
        </div>
    );
};

export default Me;