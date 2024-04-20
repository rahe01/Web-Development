
import './App.css'

function App() {
  

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const user = {name, email}
    console.log(user)

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
     .then(response => response.json())
     .then(data => {
      console.log(data)
      if(data.inserted) {
        alert('User added')
        form.reset()
      }
     })
  }


  return (
    <>
      
      
      <h1>Vite + React</h1>


      <form onSubmit={handleSubmit}>
        <input type="text" name='name' /> <br />
        <input type="email" name="email" id="" /><br />
        <input type="submit" value="Submit" />
      </form>
      
    </>
  )
}

export default App
