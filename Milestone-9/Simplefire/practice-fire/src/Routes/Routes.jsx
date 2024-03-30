import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Layout from "../Components/Layout";
import Login from "../Components/Login";
import SingUp from "../Components/SingUp";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path : '/singup',
            element : <SingUp></SingUp>
        }

      ]
    },
  ]);



  export default router;