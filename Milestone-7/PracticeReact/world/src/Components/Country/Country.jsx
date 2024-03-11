import { useState } from "react";
import "./Countryy.css";

export default function Country({ country }) {

  const [countryy, setCountry] = useState(false);

  const handleVisited =() =>{
    setCountry(!countryy);
  }



  console.log(country);
  const { name, flags } = country;

  return (
    <div className="country-div" style={{background : countryy ? 'salmon' : 'green'}}>
      <h3 style={{color: countryy ? 'red' : 'yellow'}}>Name : {name.common}</h3>
      <img src={flags.png} alt={name.common} />
      <button onClick={handleVisited} style={{color: countryy ? 'purple':'red'}} >Visited</button> <br />
    {
      countryy ? <h5>Visited</h5> : <h5>I want to go there</h5>
    }

      <button>Going</button>
      
    </div>
  );
}
