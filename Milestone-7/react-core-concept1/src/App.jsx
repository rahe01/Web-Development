import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Actor from "./Actor";
import Singer from "./Singer";

function App() {
  const actors = ["a", "b", "c", "d", "e", "f"];

  const singer = [
    {name:'A',age:1,id:1},
    {name:'t',age:1,id:2},
  ]

  return (
    <>
      <h1>Vite + React</h1>

      {
        singer.map(sin => <Singer singer ={sin}></Singer>)
      }

      <Actor name={"Bappa Raj"}></Actor>

      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore JSX" isDone={false}></Todo>
      <Todo task="Props" isDone={true}></Todo>  */}

      {/* <Device name="Phone" price="122k"></Device>
      <Device name="HP" price="34k"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student   score="95"></Student>
      <Student  grade="7" ></Student>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  // console.log(props)
  return (
    <h1>
      This device is : {props.name}. Price: {props.price}{" "}
    </h1>
  );
}
function Person() {
  const age = 19;
  const person = { name: "John", age: 56 };
  return (
    <h1>
      I am a {person.name} with age {person.age}
    </h1>
  );
}

function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return (
    <div className="student">
      <h1>I am a student</h1>
      <p>Grade: {grade}</p>
      <p>Score: {score} </p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    color: "red",
    fontSize: "20px",
    margin: "20px",
    border: "2px solid black",
  };
  return <h5 style={developerStyle}>Delvoper </h5>;
}

export default App;
