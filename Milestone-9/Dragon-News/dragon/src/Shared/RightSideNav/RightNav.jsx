import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import qZone1  from '../../assets/qZone1.png'
import qZone2  from '../../assets/qZone2.png'
import qZone3  from '../../assets/qZone3.png'

const RightNav = () => {
  return (
    <div className="border">
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Login with</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          GitHub
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl mb-4">Find Us On</h2>
        <a
          href=""
          className="p-4 flex items-center text-lg  rounded-t-lg border"
        >
          <FaFacebook className="mr-3"></FaFacebook>
          Facebook
        </a>
        <a href="" className="p-4 flex items-center text-lg    border-x">
          <FaTwitter className="mr-3"></FaTwitter>X
        </a>
        <a
          href=""
          className="p-4 flex items-center text-lg  rounded-b-lg border"
        >
          <FaInstagram className="mr-3"></FaInstagram>
          Instragram
        </a>
      </div>

      {/* Q zone */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
        
      </div>
    </div>
  );
};

export default RightNav;
