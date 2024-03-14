import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmark, handleTime }) => {
  const {
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    title,
    hashtags,
    id,
  } = blog;

  return (
    <div className=" bg-slate-400 rounded-2xl mb-5 mt-5 space-y-3 ">
      <img src={cover} className="w-full rounded-t-lg" alt="" />

      <div className="flex justify-between">
        <div className="flex gap-2">
          <img className="h-14 rounded-full" src={author_img} alt="" />
          <div>
            <h4 className="text-2xl font-bold">{author}</h4>
            <p>{posted_date}</p>
          </div>
        </div>

        <div className="flex gap-3 justify-center items-center">
          <p>{reading_time} min read</p>
          <button onClick={() => handleBookmark(title)}>
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-2">{title}</h1>

      {hashtags.map((hashtag, idx) => (
        <span key={idx}>#{hashtag}</span>
      ))}
      <br />
      <button
        onClick={() => handleTime(id, reading_time)}
        className="text-xl font-semibold underline text-purple-600"
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
