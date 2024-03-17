import { useState } from "react";

const Registrations = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmit , setisSubmit] = useState(false)

  const [isChecked , setisChecked] = useState(false)

    // console.log({name : name, email : email, password : password})

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!isChecked){
            alert("Please accept the terms and conditions")
            return
        }
        console.log("Submit")
        const user = {name : name, email : email, password : password}
        console.log(user)
        setisSubmit(true)

    }

  return (
    <div className="h-screen w-full flex justify-center items-center bg-purple-500">
      <form onSubmit={(event) => handleSubmit(event)} className="w-2/3 lg:w-2/5 bg-white rounded shadow-lg p-8">
        <h1 className="text-4xl mb-6 text-purple-500 text-center">
          Signup Form
          <label className="mb-2 text-lg">Name</label>
          <input
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter your name"
            className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded text-lg mb-3"
            required
          />
          <label className="mb-2 text-lg">Email</label>
          <input
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter your email"
            className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded text-lg mb-3"
            required
          />
          <label className="mb-2 text-lg">Password</label>
          <input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Enter your password"
            className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded text-lg mb-3"
            required
          />

          <input type="checkbox" onChange={(event) => setisChecked(event.target.checked)} /> Checked please
          <div className="flex justify-end mt-3">
            <button
              type="submit"
              className="bg-purple-500 rounded h-12 w-20 text-xl text-white"
            >
              Signup
            </button>
          </div>
        </h1>
      </form>





      {
        isSubmit &&   <div className="fixed top-0 flex justify-center items-center h-screen bg-purple-500 w-full">
        <div className="w-2/3 h-2/3 rounded-3xl bg-purple-300 text-center ">
            <h1>Success</h1>
            <p>{name}</p>
            <p>{email}</p>
            <p>{password}</p>
        </div>
    </div>

      }











    </div>
  );
};

export default Registrations;
