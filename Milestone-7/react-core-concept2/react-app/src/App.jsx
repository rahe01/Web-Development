import { useState } from 'react'

import './App.css'

import Counter from './Counter'
import Team from './Team'
import Users from './Users';

import { Friend }  from './Friend';

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () =>{
    alert('button clicked 2')
  }

  const addToTwo = (num) =>{
    alert(num +2);
  }

  return (
    <>
     
      <h3>React core concept 2</h3>

      <Friend></Friend>

      <Users></Users>

      <Team></Team>

    <Counter></Counter>


      <button onClick={handleClick}>Click Me</button>

      <button onClick={handleClick2}>Click2</button>

      <button onClick={( )=>{alert('third clicked')}}>Third </button>

      <button onClick={() => addToTwo(1)}>add</button>
    
    </>
  )
}

export default App
