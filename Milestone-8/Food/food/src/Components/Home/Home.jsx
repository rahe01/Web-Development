import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div className="container m-auto">
      <Navbar></Navbar>

      <Hero></Hero>

      <Outlet></Outlet>
    </div>
  );
};

export default Home;
