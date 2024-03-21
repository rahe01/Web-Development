import { useState } from "react";

const Statefullform = () => {

    const [email , setEmail] = useState('dsfdsf')
    const [password, setPassword] = useState(null)
    const [name, setName] = useState(null)




  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password, name)

  };

  const handleEmail = (e) => {  
    console.log(e.target.value);
    setEmail(e.target.value);
    e.preventDefault()
    console.log(email);
  }

  const handlePassword = (e) => {
    
    setPassword(e.target.value);
    e.preventDefault()
    console.log(password);
  }

  const handleName = (e) => {
    
    setName(e.target.value);
    e.preventDefault()
    console.log(name);
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleName} type="text" name="name" />
        <br />
        <input onChange={handleEmail} type="email" name="email" id="" />
        <br />

        <input onChange={handlePassword} type="password" name="password" id="" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Statefullform;
