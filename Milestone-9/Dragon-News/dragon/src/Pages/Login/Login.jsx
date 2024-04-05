import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation } from 'react-router-dom';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate(); // Initialize useNavigate hook
    const location = useLocation();
    console.log(location.pathname);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/");
            })                          
            .catch(error => {
                console.log(error);
            });
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
                <p className="mt-4">Do have an account? <Link to={'/register'}><button className="btn btn-active btn-link">Register</button></Link></p>
            </div>
        </div>
    );
};

export default Login;
