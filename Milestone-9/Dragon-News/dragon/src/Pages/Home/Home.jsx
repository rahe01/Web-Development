import Header from "../../Shared/Header/Header";
import LeftSide from "../../Shared/LeftSideNav/LeftSide";
import Navbar from "../../Shared/Navbar/Navbar";
import RightNav from "../../Shared/RightSideNav/RightNav";
import BrakingNews from "./BrakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData()
  console.log(news)
  return (
    <div>
      <Header></Header>
      <BrakingNews></BrakingNews>
      <Navbar></Navbar>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSide></LeftSide>
        </div>

        {/* News card */}
        <div className="md:col-span-2 ">
          {
            news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
          }
        </div>
        <div>
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
