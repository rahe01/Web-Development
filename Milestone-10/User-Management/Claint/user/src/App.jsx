import { useEffect, useState } from 'react'

import './App.css'

function App() {
  
  const [users , setUser] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])

const  handleadduser = e => {
  e.preventDefault()
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const user = {
    name , email}
    console.log(user)

    fetch('http://localhost:5000/users' ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log('post api hit' , data)
      const newUser = [...users, data]
      setUser(newUser)
      form.reset()
    }
 
  )
}


  return (




    <>
    
      <h1>Server</h1>
      <h2>numbers of user : {users.length}</h2>
      <form onSubmit={handleadduser}>
        <input type="text" name='name' /> <br />
        <input type="email" name="email" id="" /> <br />
        <input type="submit" value="Add user" />
      </form>

      <div>
        {
          users.map((user , idx) => (
            <div key={idx}>
              <h3>{user.name}</h3>
              <h4>{user.email}</h4>
            </div>
          ))
        }
      </div>
      
    </>
  )
}

export default App
