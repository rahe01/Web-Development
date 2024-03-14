import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/Bookmarks/Bookmark";
import Header from "./components/Header/Header";

function App() {
  const [bookmark, setBookmark] = useState([]);

  const [time, setTime] = useState(0);

  const handleBookmark = (title) => {
    setBookmark([...bookmark, title]);

    console.log("clicked", title);
  };

  const handleTime = (timee, id) => {
    const newTime = timee + time;
    setTime(newTime);

    console.log("clicked time");
    console.log(id);

    const newBookmark = bookmark.map(
      (bookmarkItem) => bookmarkItem.id !== id
    );
    setBookmark(newBookmark);

    console.log(newBookmark);
  };

  return (
    <>
      <Header></Header>

      <div className="md:flex max-w-6xl m-auto">
        <Blogs handleBookmark={handleBookmark} handleTime={handleTime}></Blogs>
        <Bookmark bookmark={bookmark} time={time}></Bookmark>
      </div>
    </>
  );
}

export default App;
