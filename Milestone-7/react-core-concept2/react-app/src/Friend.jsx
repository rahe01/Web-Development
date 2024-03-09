import { useEffect, useState } from "react";
import "./Friend.css";
import Frien from "./Frien";

export function Friend() {
  const [friend, setFriend] = useState([]);


  useEffect( ()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriend(data))


  },[])

  return (
    <div className="box">
      <h3>Friends : {friend.length}</h3>

      {
        friend.map(friend => <Frien friend={friend}></Frien>)
      }
    </div>
  );
}

/*
1. state to hold data
2. use effect with dependency array
3.use fetch to use data
4.set loded data to the steate
*/
