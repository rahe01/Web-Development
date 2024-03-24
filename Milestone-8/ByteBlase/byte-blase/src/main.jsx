import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Blogs from './Pages/Blogs.jsx';
import BookMarks from './Pages/BookMarks';
import MainLayout from './LayOuts/MainLayout.jsx';

const router =  createBrowserRouter([
  {
    path : '/',
    element : <MainLayout></MainLayout>,
    children: [

      {
        index : true,
        element : <Home></Home>,
      

      },
      {
        path : '/blogs',
        loader : () => fetch('https://dev.to/api/articles?per_page=20&top=7') ,
        element : <Blogs></Blogs>
      },
      {
        path : '/bookmarks',
        element : <BookMarks></BookMarks>
      },
    ]
  },



]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
   
  </React.StrictMode>,
)
