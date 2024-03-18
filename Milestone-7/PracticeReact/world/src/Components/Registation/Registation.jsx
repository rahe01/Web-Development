import { useState } from "react";

const Registation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // const user = {name: name, email: email, password: password}
  // console.log(user);

  // function clearModal() {
  //   setIsSubmitted(false);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isClicked) {
      alert("please elick the check boox");
      return;
    }

    console.log(name);
    console.log(email);
    console.log(password);
    setIsSubmitted(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl h-auto items-center p-5 ">
        <h1 className="text-3xl font-bold text-center text-purple-600 ">
          Sing Up
        </h1>

        <form onSubmit={(event) => handleSubmit(event)}>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-lg">Name</span>
            </div>
            <input
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-lg">Email</span>
            </div>
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-lg">Password</span>
            </div>
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>

          <div className="flex justify-between mt-4">
            <div className="form-control">
              <label className="cursor-pointer label">
                <input
                  onChange={(event) => setIsClicked(event.target.checked)}
                  type="checkbox"
                  className="checkbox checkbox-info"
                />
              </label>
            </div>

            <button className="btn btn-ghost float-right ">Submit</button>
          </div>
        </form>

        {isSubmitted && (
          <div className="fixed top-0 flex justify-center items-center h-screen w-full bg-gradient-to-r from-indigo-900 via-purple-600 to-cyan-400">
            <div className="w-1/3 flex h-2/3 rounded-3xl bg-purple-300 text-center items-center justify-center flex-col">
              <h1 className="   text-3xl font-bold text-center text-purple-600  ">
                Successfully
              </h1>

              <p> Name : {name}</p>
              <p> Email : {email}</p>
              <p> Password : {password}</p>

              <button className="btn" onClick={() => window.location.reload()}>
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Registation;
