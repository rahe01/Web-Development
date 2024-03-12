
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks , setBookmarks ] = useState([])

  const handleAddToBookmarks = blog =>{
    console.log(blog.title)

    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  

  return (

    





    <>
      
    <Header></Header>

    <div className='md:flex max-w-6xl mx-auto'>
    <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>

    <Bookmarks bookmarks={bookmarks}></Bookmarks>


    </div>


    </>
  )
}

export default App
