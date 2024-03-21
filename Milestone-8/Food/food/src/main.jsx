import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Meals from './Components/Meals/Meals';
import MealDetails from './Components/Meals/MealDetails';






const router = createBrowserRouter ([

  {
    path: '/',
    element : <Home></Home>,
    children : [
      {
        path: '/about',
        element : <About></About>
      },
      {
        path : '/meal',
        loader : () => fetch('https://jsonplaceholder.typicode.com/users'),
        element : <Meals></Meals>
      },
      {
        path: '/meal/:mealId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.mealId}`),
        element: <MealDetails></MealDetails>
      }
    ]
  }





])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
     
    </RouterProvider>
  </React.StrictMode>,
)
