import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Components/Root/Root";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Heroregister from "./Components/HeroRegister/Heroregister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },

      { path: "/login", element: <Login></Login> },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:'/registerHero',
        element: <Heroregister></Heroregister>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
