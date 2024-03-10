import { useEffect, useState } from "react"
import Country from "../Country/Country"

export default function Countries() {

    const [countires , setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
     .then(res => res.json())
     .then(data => setCountries(data))
    }, [])

    return(

        <div>
            <h2>Countries</h2>



        {
            countires.map(country => <Country key={country.cca3} country={country}></Country>)
        }





        </div>

    



    )
}