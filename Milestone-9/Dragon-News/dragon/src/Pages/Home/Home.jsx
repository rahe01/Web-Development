import { useState } from 'react';
import Header from "../../Shared/Header/Header";
import LeftSide from "../../Shared/LeftSideNav/LeftSide";
import Navbar from "../../Shared/Navbar/Navbar";
import RightNav from "../../Shared/RightSideNav/RightNav";
import BrakingNews from "./BrakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const data = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState('all'); // Default to 'all' categories
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [articlesPerPage, setArticlesPerPage] = useState(5); // Number of articles per page

  // Check if data contains news articles and is an array
  const news = data && Array.isArray(data.articles) ? data.articles : [];

  // Filter news based on selected category
  const filteredNews = selectedCategory === 'all' ? news : news.filter(item => item.category === selectedCategory);

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredNews.slice(indexOfFirstArticle, indexOfLastArticle);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Log the fetched data for debugging
  console.log(news);

  return (
    <div>
      <Header />
      <BrakingNews />
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSide />
        </div>

        {/* News card */}
        <div className="md:col-span-2">
          {/* Category filter */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Filter by Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="all">All Categories</option>
              <option value="business">Business</option>
              <option value="technology">Technology</option>
              <option value="entertainment">Entertainment</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Render news cards based on currentArticles */}
          {currentArticles.length > 0 ? (
            currentArticles.map((aNews) => <NewsCard key={aNews.url} news={aNews} />)
          ) : (
            <p>No news articles found for the selected category.</p>
          )}

          {/* Pagination */}
          <nav className="mt-4 flex justify-center">
            <ul className="pagination  flex justify-center gap-4">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => paginate(currentPage - 1)}>Previous</button>
              </li>
              {Array.from({ length: Math.ceil(filteredNews.length / articlesPerPage) }, (_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button className="page-link bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded" onClick={() => paginate(index + 1)}>{index + 1}</button>
                </li>
              ))}
              <li className={`page-item ${currentPage === Math.ceil(filteredNews.length / articlesPerPage) ? 'disabled' : ''}`}>
                <button className="page-link bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => paginate(currentPage + 1)}>Next</button>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <RightNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
