import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=a0a5dc40630b439795fd61a60ecb2a51')
      },
      {
        path: '/news/:id',
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: () => fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=a0a5dc40630b439795fd61a60ecb2a51')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ],
  },
]);

export default router;
