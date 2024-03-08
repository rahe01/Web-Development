import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Task from './Task'
import Singer from "./Singer";

function App() {
  const [count, setCount] = useState(0);

  const singers =[
    {name: 'Pritom' , age:'37', id:'1'},
    {name: 'Jems' , age:'33', id:'2'},
  ]
 

  return (
    <>
      <h1>Vite + React</h1>
      {/* <Task name="Reading Book" isDone= {true} ></Task>
      <Task name="Python"></Task>
      <Task name="Java" isDone= {true} ></Task>
      <Task name="C++"></Task> */}

      {
        singers.map((sin) => <Singer singer = {sin}></Singer> )
      }



    </>
  );
}

export default App;
