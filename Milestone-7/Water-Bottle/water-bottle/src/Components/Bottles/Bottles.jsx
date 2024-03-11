import { useEffect, useState } from "react";
import Bottle from './../Bottle/Bottle';


const Bottles = () => {



    const [bottles , setBottles] = useState([])

    useEffect( () =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])






    return (
        <div>
            <h3>Bottles Here {bottles.length}</h3>

            <Bottle bottle={bottles}></Bottle>
        </div>
    );
};

export default Bottles;