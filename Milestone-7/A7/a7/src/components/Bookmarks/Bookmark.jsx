import Book from "../Book/Book";
// import Time from "../Time/Time";

const Bookmark = ({ bookmark, time }) => {
  return (
    <div className="md:w-1/3  mt-5 m-5   rounded-2xl">
      <h1>Total Time : {time}</h1>
      <h1 className="text-2xl font-bold text-center ">
        BookMark {bookmark.length}
      </h1>

      {bookmark.map((bookmark, idx) => (
        <Book key={idx} bookmark={bookmark}></Book>
      ))}
    </div>
  );
};

export default Bookmark;
