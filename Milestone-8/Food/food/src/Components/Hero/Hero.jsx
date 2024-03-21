import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <div className="container w-11/12 m-auto mt-10 rounded-3xl">
            <div className="hero min-h-screen rounded-3xl" style={{backgroundImage: 'url(https://i.ibb.co/g3cj22Q/pexels-elevate-1267320.jpg)'}}>
  <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link to='/meal'><button className="btn btn-primary">Go to our amazing kitchen</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;