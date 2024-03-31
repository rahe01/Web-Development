import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";


const Register = () => {
  const navigate = useNavigate()

  const {createUser , singInWithgoogle} = useContext(AuthContext)
   

    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password)

        createUser(email, password)
        .then(result =>{
          console.log(result.user)

        })
        .catch(error =>{
           console.log(error)
 
        })
        
    }

    const handleGoogle =() =>{
      singInWithgoogle()
      .then(result =>{
        console.log(result.user)
        navigate('/')
      })
      .catch(error =>{
        console.log(error)
      })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register</h1>
           
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
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
  
            <p>Already here? Please <Link to={'/login'}><button className="btn btn-link">Login</button></Link> </p>
            <p><button className="btn btn-ghost" onClick={handleGoogle}>Google</button></p>
          </div>
        </div>
      </div>
    );
};

export default Register;