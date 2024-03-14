import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";



const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blog.json')
     .then(response => response.json())
     .then(data => setBlogs(data))
     
     
  }, []);

  return (
    <div >

      


   <div className="max-w-6xl m-auto">
   {
        blogs.map((blog ,idx) => <Blog key={idx} blog={blog}></Blog>)
    }

   </div>


    </div>
  );
};

export default Blogs;