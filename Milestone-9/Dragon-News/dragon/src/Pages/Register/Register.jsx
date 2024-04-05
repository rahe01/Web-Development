import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext)



    const handleRegister = (e) => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email, password);
        const form = new FormData(e.currentTarget);

        const email = form.get("email");
        const password = form.get("password");
        const name = form.get("name");
        console.log(email, password, name);

        // create user
        createUser(email, password)
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
        <h1 className="text-3xl my-10">Please Register</h1>
        
          <div className="card shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  name="photo"
                  
                />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        
        <p className="mt-4">Do have an account? <Link to={'/login'}><button className="btn btn-active btn-link">Login</button></Link> </p>
      </div>
    </div>
    );
};

export default Register;