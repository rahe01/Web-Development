
import { useState } from 'react';
import './App.css'
import Watch from './Components/Watch/Watch';
import { useEffect } from 'react';

function App() {


  // const watches = [
  //   {id:1, name : 'Apple', price : 200},
  //   {id:2, name : 'Sam', price : 200},
  //   {id:3, name : 'mi', price : 200}
  // ]

  // const watches = [
  //   {
  //     brand: "Rolex",
  //     model: "Submariner",
  //     case_material: "Stainless Steel",
  //     movement: "Automatic",
  //     price: 8000,
  //     water_resistance: "300m"
  //   },
  //   {
  //     brand: "Omega",
  //     model: "Speedmaster Professional",
  //     case_material: "Steel",
  //     movement: "Manual",
  //     price: 6000,
  //     water_resistance: "100m"
  //   },
  //   {
  //     brand: "Tag Heuer",
  //     model: "Carrera",
  //     case_material: "Rose Gold",
  //     movement: "Automatic",
  //     price: 4500,
  //     water_resistance: "50m"
  //   },
  //   {
  //     brand: "Seiko",
  //     model: "Presage",
  //     case_material: "Stainless Steel",
  //     movement: "Automatic",
  //     price: 500,
  //     water_resistance: "50m"
  //   },
  //   {
  //     brand: "Citizen",
  //     model: "Eco-Drive",
  //     case_material: "Titanium",
  //     movement: "Solar Powered",
  //     price: 300,
  //     water_resistance: "100m"
  //   }
  // ];
  
  const [ watchess , setWatchess ] = useState([])

  useEffect(()=>{
    fetch('watches.json')

    .then(response => response.json())
    .then(data => setWatchess(data))
  },[])
  
 

  return (
    <>
     
      <h1>Vite + React</h1>

      {
        watchess.map(watch => <Watch watch={watch} key={watch.id} ></Watch> )
      }
      
    </>
  )
}

export default App
