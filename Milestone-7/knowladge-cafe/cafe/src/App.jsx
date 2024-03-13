import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingtime] = useState(0);

  const handleAddToBookmarks = (blog) => {
    console.log(blog.title);

    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };


  const handleMarkasRead =(time , id) => {

   const newTime = readingTime+time;
   setReadingtime(newTime);

   console.log(id)
   const newBookmarks = bookmarks.filter(bookmark => bookmark.id!== id)
   setBookmarks(newBookmarks)
  }

  return (
    <>
      <Header></Header>

      <div className="md:flex max-w-6xl mx-auto">
        <Blogs handleMarkasRead={handleMarkasRead} handleAddToBookmarks={handleAddToBookmarks}></Blogs>

        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
