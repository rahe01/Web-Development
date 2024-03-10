import { useEffect, useState } from "react";
import Country from "../Country/Country";

import './Country.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);

  

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then(data => setCountries(data))

  }, []);

  const handleVisitedCountry = (country) =>{
    console.log('Click')
    console.log(country)
  }


  const handleVisitedFlags= (flag) =>{
    console.log('Click')
    console.log(flag)
  }

  return (
    
    <div >
      <h3>Countries :{countries.length}</h3>


      <div>
        <h4>Visited Countries</h4>
      </div>

     <div className="country-container">
     {
        countries.map(country => <Country key={country.cca3}  handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags} country={country}></Country>)
      }
     </div>
    </div>
  );
};

export default Countries;
