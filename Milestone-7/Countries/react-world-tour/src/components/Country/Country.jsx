
 import { useState } from 'react';
import './Country1.css'
const Country = ({country,handleVisitedCountry ,}) => {
    
    const {name,flags , population , cca3, area} = country;


    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(!visited)
    }

    console.log(handleVisitedCountry)
    
    return (
        <div className={`country ${visited ? 'visited' : 'going'}`}>
            <h3 style={{color : visited ? 'purple' : 'white'}}>Name : {name?.common}</h3>

            <img src={flags?.png} alt="" />
            <p>Population: {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button>Mark visited</button> 
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'i vidited' : 'i am going'}
            
        </div>
    );
};

export default Country;