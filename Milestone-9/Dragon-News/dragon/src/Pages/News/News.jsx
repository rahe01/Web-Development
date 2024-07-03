import { useParams ,useLoaderData} from "react-router-dom";
import Header from "../../Shared/Header/Header";
import RightNav from "../../Shared/RightSideNav/RightNav";
import Navbar from "../../Shared/Navbar/Navbar";


const News = () => {
  const { id } = useParams(); // Retrieve the ID from URL parameters
  const data = useLoaderData();
  
  // Assuming data.articles is an array of articles
  const article = data.articles.find(article => article.publishedAt === id);
  
  if (!article) {
    return <div>Loading...</div>; // Handle loading state if needed
  }
  
  const { title, description, urlToImage, url, author, publishedAt, content } = article;

  return (
    <div>
      <Header />
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <img src={urlToImage} alt={title} className="rounded-lg mb-4" />
            <p className="text-gray-600 mb-4">{description}</p>
            <p className="text-sm text-gray-500 mb-4">Published by {author} on {new Date(publishedAt).toLocaleDateString()}</p>
            <p className="mb-4">{content}</p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Read more</a>
          </div>
          <div className="md:col-span-1">
            <RightNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
