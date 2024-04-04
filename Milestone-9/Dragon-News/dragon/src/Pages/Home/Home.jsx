import Header from "../../Shared/Header/Header";
import LeftSide from "../../Shared/LeftSideNav/LeftSide";
import Navbar from "../../Shared/Navbar/Navbar";
import RightNav from "../../Shared/RightSideNav/RightNav";
import BrakingNews from "./BrakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BrakingNews></BrakingNews>
      <Navbar></Navbar>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSide></LeftSide>
        </div>
        <div className="md:col-span-2 border">
          <h2>News comming soon</h2>{" "}
        </div>
        <div>
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
