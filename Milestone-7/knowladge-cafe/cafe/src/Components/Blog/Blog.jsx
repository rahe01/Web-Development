import PropTypes from "prop-types";

import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog , handleAddToBookmarks }) => {
  const { title, cover , reading_time , posted_date, author , author_img , hashtags } = blog;

  return (
    <div className="mb-20">
      <img className="w-full mb-8" src={cover} alt={`Cover pic of the title ${title}`} />

      <div className="flex justify-between mb-4">
        <div className="flex">
            <img className="w-14" src={author_img} alt="" />

            <div className="ml-6">
                <h3 className="text-2xl">{author}</h3>
                <p>{posted_date}</p>

            </div>
        </div>

        <div>
            <span>{reading_time} min read</span>
            <button onClick={ ()=>handleAddToBookmarks (blog)} className="ml-2 text-red-500 text-2xl"><FaBookmark></FaBookmark></button>

        </div>
      </div>
      <h2 className="text-4xl"> {title}</h2>

      {
        hashtags.map((hash ,index) => <span key={index} > <a href="">#{hash}</a></span>)
      }
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
