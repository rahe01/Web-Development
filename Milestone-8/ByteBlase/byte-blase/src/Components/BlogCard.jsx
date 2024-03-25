import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import placeholderImage from "../assets/404.jpg";
// import { deleteBlogs } from "../Utils";

const BlogCard = ({ blog , deletable ,handleDelet}) => {
  const { title, description, published_at, cover_image, id } = blog;





  return (
   <div className="flex relative">
    <Link
      to={`/blog/${id}`}
      className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50 transition border-2 hover:scale-105 border-primary hover:border-secondary  border-opacity-30"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500"
        src={cover_image || placeholderImage}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs text-gray-400 dark:text-gray-600">
          {new Date(published_at).toLocaleDateString()}
        </span>
        <p>{description}</p>
      </div>
    </Link>
    
    {deletable && <div onClick={()=> handleDelet(id)} className="absolute bg-primary p-3 rounded-full hover:scale-105 -top-5 -right-5"><MdDeleteOutline size={20} className="text-secondary group-hover:text-primary"></MdDeleteOutline></div>}
    
    </div>
  );
};

export default BlogCard;
