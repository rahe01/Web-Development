import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const {singIn} = useContext(AuthContext)


  const handleLogin = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(email, password);
    const form = new FormData(e.currentTarget);
    console.log(form.get("email"), form.get("password"));
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    singIn(email, password)
    .then(result => {
        console.log(result.user);
    })                          
    .catch(error => {
        console.log(error);
    })       
  };
  return (
    <div>
      <Navbar></Navbar>

      <div className="text-center">
        <h1 className="text-3xl my-10">Please Login</h1>
        
          <div className="card shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
       
        <p className="mt-4">Don`t have an account? <Link to={'/register'}><button className="btn btn-active btn-link">Register</button></Link> </p>
      </div>
    </div>
  );
};

export default Login;
