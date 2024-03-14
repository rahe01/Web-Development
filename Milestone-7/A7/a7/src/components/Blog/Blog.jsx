import { FaBookmark } from "react-icons/fa";

const Blog = ({blog}) => {

    const { cover , author_img , author ,posted_date , reading_time ,title , hashtags} = blog;


    return (
        <div className="w-2/3 bg-slate-400 rounded-lg mb-5 mt-5 space-y-3 ">
           <img src={cover} className="w-full rounded-t-lg" alt="" />



            <div className="flex justify-between">
                    <div className="flex gap-2">
                        <img className="h-14 rounded-full" src={author_img} alt="" />
                        <div><h4 className="text-2xl font-bold">{author}</h4>
                        <p>{posted_date}</p>
                        </div>
                    </div>

                    <div className="flex gap-3 justify-center items-center">
                        <p>{reading_time} min read</p>
                        <button><FaBookmark></FaBookmark></button>
                    </div>

            </div>

            <h1 className="text-4xl font-bold mb-2">{title}</h1>
           
           {
            hashtags.map((hashtag,idx) => <span key={idx}>#{hashtag}</span>)
           }

            



        </div>
    );
};

export default Blog;