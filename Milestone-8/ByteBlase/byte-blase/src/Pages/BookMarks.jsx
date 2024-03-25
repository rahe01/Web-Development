import { useEffect, useState } from "react";
import { deleteBlogs, getBlogs } from "../Utils";
import BlogCard from "../Components/BlogCard";

const BookMarks = () => {

  const [blogs , setBlogs] = useState([])

  useEffect(()=> {

    const storedBlogs = getBlogs()
    setBlogs(storedBlogs)
 


  },[])

  const handleDelet =(id) =>{
    deleteBlogs(id)
    
    const storedBlogs = getBlogs()
    setBlogs(storedBlogs)
 
  
  }



  return (
    <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard handleDelet={handleDelet} deletable ={true} key={blog.id} blog={blog}></BlogCard>
          ))}
        </div>
  );
};

export default BookMarks;
