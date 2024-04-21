
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'
import { useState } from 'react'

function App() {

  const lodeaded = useLoaderData()
  const [coffees , setCoffees] =useState(lodeaded)



  return (
    <>
      
      <h1 className='text-6xl text-purple-600'>{coffees.length}</h1>
      {
        coffees.map((coffee) => <CoffeeCard key={coffee._id} coffee={coffee} setCoffees={setCoffees}></CoffeeCard>)
      }
      
    </>
  )
}

export default App
